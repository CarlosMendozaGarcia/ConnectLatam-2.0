export type SocialMedia = {
    name:"X"| "Instagram"|"TikTok";
    user: string;
}
export type Account = {
    name:string;
    socialMedias:SocialMedia[]
    logo: string;
}

export const accounts: Account[] = [
{ name: "ENGENE CHILE",
    socialMedias: [{ name:"X", user:"EngeneChile"},{ name:"Instagram", user:"Engene.chile_"}],
    logo:"/logos/EngeneChile.svg"
},
{ name: "ENHYPEN PERÚ",
    socialMedias: [{ name:"X", user:"ENHYPENPeru"},{ name:"Instagram", user:"ENHYPENPeru"},{name:"TikTok",user:"Enhypenperu_"}],
    logo:"/logos/EnhypenPeru.svg"
},
{ name: "ENGENE CR ",
    socialMedias: [{ name:"X", user:"engene_cr"},{ name:"Instagram", user:"en.engene_cr"},{name:"TikTok",user:"en.engene_cr"}],
    logo:"/logos/EngeneCR.png"
},
{ name: "ENHYPEN EL SALVADOR",
    socialMedias: [{name:"Instagram", user:"enhypenfb_elsalvador"}],
    logo:"/logos/EnhypenElSalvador.svg"
},
{ name: "ENGENE EL SALVADOR",
    socialMedias: [{name:"Instagram", user:"engene_svoficial"}],
    logo:"/logos/EngeneSalvador.svg"
},
{ name: "Enhypen Venezuela",
    socialMedias: [{ name:"Instagram", user:"@enhypen.vzla"},{ name:"TikTok", user:"@enhypenvzla "}],
    logo: "/logos/EnhypenVenezuela.svg"
},
{ name: "Enhypen Brazil",
    socialMedias:[{name:"Instagram", user:"@enhypen_brazil"}],
    logo: "/logos/EnhypenBrazil.svg"
},
{ name: "ENHYPEN Costa Rica",
    socialMedias:[{name:"Instagram", user:"@enhypen_costarica"}],
    logo:"/logos/EnhypenCR.png"
},
{ name: "ENHYPEN PANAMÁ",
    socialMedias: [{ name:"X", user:"@ENHPENpanama"},{ name:"Instagram", user:"@enhypenpanama"},{name:"TikTok",user:"@enhypenpanama"}],
    logo: "/logos/EnhypenPanama.svg"
},
{ name: "EN BOLIVIA",
    socialMedias: [{name:"X", user:"@Enhypen_B0livia"},{name:"Instagram", user:"@en.bolivia"},{name:"TikTok", user:" @enhypen_bolivia.en"}],
    logo:"/logos/EnhypenBolivia.svg"
}
]