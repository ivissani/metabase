import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ElementType, ReactNode } from "react";

import { SortableDiv } from "./Sortable.styled";

interface SortableProps {
  id: UniqueIdentifier;
  as?: ElementType;
  children: ReactNode;
  disabled?: boolean;
}

/**
 * Wrapper to use with dnd-kit's Sortable preset
 * https://docs.dndkit.com/presets/sortable
 */
export function Sortable({
  id,
  as = "div",
  children,
  disabled = false,
}: SortableProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled });

  return (
    <SortableDiv
      as={as}
      transform={CSS.Transform.toString(transform)}
      transition={transition}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {children}
    </SortableDiv>
  );
}
