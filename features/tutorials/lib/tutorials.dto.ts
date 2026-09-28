export type Tutorial= {
    id: number,
    slug: string,
    appName: string,
    logo: string,
    type: "Comeback" | "Especial"
    description?: string,
    basePhotos: string,
    steps: number;
}