export type ArchivesType = {
    year: number,
    title: string,
    tools: Tool[],
    devLink: string,
    liveLink: string
}

type Tool = {
    name: string
    color: string
    id: string
}