import type { CollectionEntry } from "astro:content";
export type GroupPostType = {year: number; items: CollectionEntry<"blog">[]}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
}

export function groupPosts(array: CollectionEntry<"blog">[]): Array<GroupPostType> {
  const groups = array.reduce((result: any, note) => {
    const {data} = note;
    const year = new Date(data.updatedAt).getFullYear();
    const isGroupExisting: any = result.find((group: any) => group.year === year);

    if (isGroupExisting) {
      isGroupExisting.items.push(note);
    } else {
      result.push({ year: year, items: [note] });
    }

    return result;
  }, []);

  return groups;
}