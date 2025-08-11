// Import defineAppConfig from Nuxt if available
import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  ui: {
    colors: {
      primary: "indigo",
      neutral: "zinc",
      tertiary: "indigo",
    },
    textarea: {
      slots: {
        root: "relative inline-flex items-center",
        base: [
          "w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
          "transition-colors",
        ],
        leading: "absolute start-0 flex items-start",
        leadingIcon: "shrink-0 text-dimmed",
        leadingAvatar: "shrink-0",
        leadingAvatarSize: "",
        trailing: "absolute end-0 flex items-start",
        trailingIcon: "shrink-0 text-dimmed",
      },
      variants: {
        buttonGroup: {
          horizontal: {
            root: "group has-focus-visible:z-[1]",
            base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none",
          },
          vertical: {
            root: "group has-focus-visible:z-[1]",
            base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none",
          },
        },
        size: {
          xs: {
            base: "px-2 py-1 text-xs gap-1",
            leading: "ps-2 inset-y-1",
            trailing: "pe-2 inset-y-1",
            leadingIcon: "size-4",
            leadingAvatarSize: "3xs",
            trailingIcon: "size-4",
          },
          sm: {
            base: "px-2.5 py-1.5 text-xs gap-1.5",
            leading: "ps-2.5 inset-y-1.5",
            trailing: "pe-2.5 inset-y-1.5",
            leadingIcon: "size-4",
            leadingAvatarSize: "3xs",
            trailingIcon: "size-4",
          },
          md: {
            base: "px-2.5 py-1.5 text-sm gap-1.5",
            leading: "ps-2.5 inset-y-1.5",
            trailing: "pe-2.5 inset-y-1.5",
            leadingIcon: "size-5",
            leadingAvatarSize: "2xs",
            trailingIcon: "size-5",
          },
          lg: {
            base: "px-3 py-2 text-sm gap-2",
            leading: "ps-3 inset-y-2",
            trailing: "pe-3 inset-y-2",
            leadingIcon: "size-5",
            leadingAvatarSize: "2xs",
            trailingIcon: "size-5",
          },
          xl: {
            base: "px-3 py-2 text-base gap-2",
            leading: "ps-3 inset-y-2",
            trailing: "pe-3 inset-y-2",
            leadingIcon: "size-6",
            leadingAvatarSize: "xs",
            trailingIcon: "size-6",
          },
        },
        variant: {
          outline: "text-highlighted bg-default ring ring-inset ring-accented",
          soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
          subtle: "text-highlighted bg-elevated ring ring-inset ring-accented",
          ghost:
            "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
          none: "text-highlighted bg-transparent",
        },
        color: {
          primary: "#F54927",
          secondary: "#F54927",
          success: "#F54927",
          info: "#F54927",
          warning: "#F54927",
          error: "#F54927",
          neutral: "#F54927",
        },
        leading: {
          true: "",
        },
        trailing: {
          true: "",
        },
        loading: {
          true: "",
        },
        highlight: {
          true: "",
        },
        type: {
          file: "file:me-1.5 file:font-medium file:text-muted file:outline-none",
        },
        autoresize: {
          true: {
            base: "resize-none",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: ["outline", "subtle"],
          class:
            "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
        },
        {
          color: "primary",
          highlight: true,
          class: "ring ring-inset ring-primary",
        },
        {
          color: "neutral",
          variant: ["outline", "subtle"],
          class:
            "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted",
        },
        {
          color: "neutral",
          highlight: true,
          class: "ring ring-inset ring-inverted",
        },
        {
          leading: true,
          size: "xs",
          class: "ps-7",
        },
        {
          leading: true,
          size: "sm",
          class: "ps-8",
        },
        {
          leading: true,
          size: "md",
          class: "ps-9",
        },
        {
          leading: true,
          size: "lg",
          class: "ps-10",
        },
        {
          leading: true,
          size: "xl",
          class: "ps-11",
        },
        {
          trailing: true,
          size: "xs",
          class: "pe-7",
        },
        {
          trailing: true,
          size: "sm",
          class: "pe-8",
        },
        {
          trailing: true,
          size: "md",
          class: "pe-9",
        },
        {
          trailing: true,
          size: "lg",
          class: "pe-10",
        },
        {
          trailing: true,
          size: "xl",
          class: "pe-11",
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: "animate-spin",
          },
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: "animate-spin",
          },
        },
      ],
      defaultVariants: {
        size: "md",
        color: "primary",
        variant: "outline",
      },
    },
  },
});
