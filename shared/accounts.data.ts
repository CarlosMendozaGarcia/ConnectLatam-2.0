export type SocialMedia = {
    name:"X"| "Instagram"|"TikTok";
    user: string;
}
export type Account = {
    name:string;
    socialMedias?:SocialMedia[]
}

export const accounts: Account[] = [
{ name: "ENGENE CHILE",
    socialMedias: [{ name:"X", user:"EngeneChile"},{ name:"Instagram", user:"Engene.chile_"}]
},
{ name: "ENHYPEN PERÚ",
    socialMedias: [{ name:"X", user:"ENHYPENPeru"},{ name:"Instagram", user:"ENHYPENPeru"},{name:"TikTok",user:"Enhypenperu_"}]
},
{ name: "ENGENE CR ",
    socialMedias: [{ name:"X", user:"engene_cr"},{ name:"Instagram", user:"en.engene_cr"},{name:"TikTok",user:"en.engene_cr"}]
},
{ name: "ENHYPEN EL SALVADOR",
    socialMedias: [{name:"Instagram", user:"enhypenfb_elsalvador"}]
},
{ name: "ENGENE EL SALVADOR",
    socialMedias: [{name:"Instagram", user:"engene_svoficial"}]
},
{ name: "Enhypen Venezuela",
    socialMedias: [{ name:"Instagram", user:"@enhypen.vzla"},{ name:"TikTok", user:"@enhypenvzla "}]
},
{ name: "Enhypen Brazil",
    socialMedias:[{name:"Instagram", user:"@enhypen_brazil"}]
},
{ name: "ENHYPEN Costa Rica",
    socialMedias:[{name:"Instagram", user:"@enhypen_costarica"}]
},
{ name: "ENHYPEN PANAMÁ",
    socialMedias: [{ name:"X", user:"@ENHPENpanama"},{ name:"Instagram", user:"@enhypenpanama"},{name:"TikTok",user:"@enhypenpanama"}],
},

{ name: "EN BOLIVIA",
    socialMedias: [{name:"X", user:"@Enhypen_B0livia"},{name:"Instagram", user:"@en.bolivia"},{name:"TikTok", user:" @enhypen_bolivia.en"}]
}
]