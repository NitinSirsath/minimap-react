declare module "react-minimap" {
  import * as React from "react";

  // This represents the default renderer for a child in the minimap.
  export class Child extends React.Component<{
    width: number;
    height: number;
    left: number;
    top: number;
  }> {}

  // The type for the custom render prop function.
  type ChildComponentRenderFn = (props: {
    width: number;
    height: number;
    left: number;
    top: number;
    node: HTMLElement; // The actual DOM node from the content
  }) => React.ReactNode;

  interface MinimapProps {
    /** The content that will be scrollable. */
    children: React.ReactNode;
    /** A CSS selector to identify which children inside the container should be drawn on the minimap. */
    selector: string;
    /** A custom class name for the scrollable container created by the component. */
    className?: string;
    /** The width of the minimap UI in pixels. */
    width?: number;
    /** The height of the minimap UI in pixels. */
    height?: number;
    /** Whether the minimap should maintain the same aspect ratio as the content. */
    keepAspectRatio?: boolean;
    /** A render prop to customize how each selected child is drawn on the minimap. */
    childComponent?: ChildComponentRenderFn;
  }

  const Minimap: React.FC<MinimapProps>;

  export default Minimap;
}
