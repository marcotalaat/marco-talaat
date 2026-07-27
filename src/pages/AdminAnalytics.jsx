// src/pages/AdminAnalytics.jsx
//
// Mount this at /admin-3391 in your router. No auth — relies on the URL
// being obscure, per your call. If you ever want a password gate later,
// wrap the return with a simple prompt() check or a login form.

import { useEffect, useMemo, useState } from "react";
import { RefreshCw, MousePointerClick, Navigation, Trash2 } from "lucide-react";
import { fetchClicks, deleteClick } from "@/lib/clickTracker";

const AdminAnalytics = () => {
  const [clicks, setClicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clearing, setClearing] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchClicks();
      setClicks(data);
    } catch (err) {
      setError(err.message || "Failed to load click data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // --- Aggregation ---------------------------------------------------

  const projectStats = useMemo(() => {
    const map = new Map();
    clicks
      .filter((c) => c.type === "project")
      .forEach((c) => {
        const key = c.label || "Unknown";
        if (!map.has(key)) {
          map.set(key, {
            label: key,
            home: 0,
            portfolio: 0,
            total: 0,
            last: null,
          });
        }
        const entry = map.get(key);
        if (c.source === "home") entry.home += 1;
        else if (c.source === "portfolio") entry.portfolio += 1;
        entry.total += 1;
        if (!entry.last || new Date(c.timestamp) > new Date(entry.last)) {
          entry.last = c.timestamp;
        }
      });
    return Array.from(map.values()).sort((a, b) => b.total - a.total);
  }, [clicks]);

  const navStats = useMemo(() => {
    const map = new Map();
    clicks
      .filter((c) => c.type === "nav")
      .forEach((c) => {
        const key = c.label || "Unknown";
        if (!map.has(key)) {
          map.set(key, { label: key, total: 0, last: null });
        }
        const entry = map.get(key);
        entry.total += 1;
        if (!entry.last || new Date(c.timestamp) > new Date(entry.last)) {
          entry.last = c.timestamp;
        }
      });
    return Array.from(map.values()).sort((a, b) => b.total - a.total);
  }, [clicks]);

  const totalProjectClicks = projectStats.reduce((sum, p) => sum + p.total, 0);
  const totalNavClicks = navStats.reduce((sum, n) => sum + n.total, 0);
  const maxProject = Math.max(1, ...projectStats.map((p) => p.total));
  const maxNav = Math.max(1, ...navStats.map((n) => n.total));

  const handleClearAll = async () => {
    if (
      !window.confirm(
        `Delete all ${clicks.length} click records? This can't be undone.`,
      )
    ) {
      return;
    }
    setClearing(true);
    try {
      // MockAPI has no bulk-delete endpoint — delete one by one.
      await Promise.all(clicks.map((c) => deleteClick(c.id)));
      await load();
    } catch (err) {
      setError(err.message || "Failed to clear data");
    } finally {
      setClearing(false);
    }
  };

  // --- Render ----------------------------------------------------------

  return (
    <section className="min-h-screen bg-[#0F172A] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
              Private
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Click Analytics
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={load}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>

            <button
              onClick={handleClearAll}
              disabled={clearing || clicks.length === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 transition-all disabled:opacity-50"
            >
              <Trash2 size={18} />
              Clear All
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Summary cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          <SummaryCard
            icon={<MousePointerClick size={20} />}
            label="Total Project Clicks"
            value={totalProjectClicks}
          />
          <SummaryCard
            icon={<Navigation size={20} />}
            label="Total Nav Clicks"
            value={totalNavClicks}
          />
          <SummaryCard
            icon={<MousePointerClick size={20} />}
            label="All Recorded Events"
            value={clicks.length}
          />
        </div>

        {/* Project clicks */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Project Clicks (Home + Portfolio)
          </h2>

          {loading ? (
            <p className="text-white/50">Loading…</p>
          ) : projectStats.length === 0 ? (
            <p className="text-white/50">No project clicks recorded yet.</p>
          ) : (
            <div className="space-y-4">
              {projectStats.map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">{p.label}</span>
                    <span className="text-primary font-bold">{p.total}</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${(p.total / maxProject) * 100}%` }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/50">
                    <span>Home page: {p.home}</span>
                    <span>Portfolio page: {p.portfolio}</span>
                    {p.last && (
                      <span>
                        Last click: {new Date(p.last).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nav clicks */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Nav Clicks</h2>

          {loading ? (
            <p className="text-white/50">Loading…</p>
          ) : navStats.length === 0 ? (
            <p className="text-white/50">No nav clicks recorded yet.</p>
          ) : (
            <div className="space-y-4">
              {navStats.map((n) => (
                <div
                  key={n.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">{n.label}</span>
                    <span className="text-primary font-bold">{n.total}</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${(n.total / maxNav) * 100}%` }}
                    />
                  </div>

                  {n.last && (
                    <span className="text-sm text-white/50">
                      Last click: {new Date(n.last).toLocaleString()}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const SummaryCard = ({ icon, label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
      {icon}
    </div>
    <div>
      <p className="text-sm text-white/50">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default AdminAnalytics;
