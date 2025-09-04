type AdditionalParam = {
  url: string;
  title: {};
}

export type Action = {
    title: string;
    href: string;
    $: AdditionalParam;
  }

export type Image = {
    filename?: string;
    title?: string;
    url: string;
    $?: AdditionalParam;
  }