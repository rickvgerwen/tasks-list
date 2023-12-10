import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Task } from '@shared/types/task.type';

@Pipe({
  name: 'highlightFilter',
})
export class HighlightFilterPipe<T extends Task> implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(items: T[], searchText: string): T[] {
    const lowerSearchText = searchText.toLocaleLowerCase();

    if (!searchText) return items;

    const highlightedItems = items
      .filter((item) => {
        const keys = Object.keys(item) as (keyof T)[];
        return keys.some((key) => {
          const value = item[key];
          return typeof value === 'string' && value.toLowerCase().includes(lowerSearchText.toLowerCase());
        });
      })
      .map((item) => {
        const itemWithHightlight = { ...item };
        const keys = Object.keys(item) as (keyof T)[];

        keys.forEach((key) => {
          const value = item[key];
          if (typeof value === 'string' && value.toLowerCase().includes(lowerSearchText.toLowerCase())) {
            const startIndex = value.toLowerCase().indexOf(lowerSearchText.toLowerCase());
            const endIndex = startIndex + lowerSearchText.length;

            const startString = value.substring(0, startIndex);
            const highlightString = value.substring(startIndex, endIndex);
            const endString = value.substring(endIndex);

            const highlightedValue = `${startString}<strong style="background-color: var(--primary-color)">${highlightString}</strong>${endString}`;

            itemWithHightlight[key] = this.sanitizer.bypassSecurityTrustHtml(highlightedValue) as T[keyof T];
          }
        });

        return itemWithHightlight;
      });

    return highlightedItems;
  }
}
