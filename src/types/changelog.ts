import { Card } from "./card";
import { Collection } from "./collection";

export enum LineType {
  ADDED = "Added",
  CHANGED = "Changed",
  REMOVED = "Removed",
};

export type ChangelogLine = {
  type: LineType;
  card?: Card;
  collection?: Collection;
  text?: string;
  user: string;
};

export type Changelog = {
  date: Date,
  items: ChangelogLine[],
};