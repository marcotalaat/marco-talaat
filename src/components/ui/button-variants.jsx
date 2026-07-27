import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex items-center justify-center rounded-xl font-medium transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-md hover:bg-primary/90",
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-white",
        secondary: "bg-secondary text-brandDarkest hover:bg-secondary/80",
        ghost: "hover:bg-muted",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-12 px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
