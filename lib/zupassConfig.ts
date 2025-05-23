// Define ticket type names
export type TicketTypeName = "Zuzalu" | "ZuConnect" | "Vitalia" | "AgoraCore" | "ZuArchitects" | "ZuVillageGeorgia" | "EdgeEsmeralda" | "EdgeEsmeraldaLocal"

// Define the whitelisted tickets configuration
export const whitelistedTickets: Record<
  TicketTypeName,
  Array<{
    eventId: string
    productId: string
    eventName?: string
    productName?: string
    pcdType?: string
    publicKey: [string, string]
  }>
> = {
  Zuzalu: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
      eventName: "Zuzalu",
      productId: "5ba4cd9e-893c-4a4a-b15b-cf36ceda1938",
      productName: "Resident",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
      eventName: "Zuzalu",
      productId: "10016d35-40df-4033-a171-7d661ebaccaa",
      productName: "Organizer",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "5de90d09-22db-40ca-b3ae-d934573def8b",
      eventName: "Zuzalu",
      productId: "53b518ed-e427-4a23-bf36-a6e1e2764256",
      productName: "Visitor",
    },
  ],
  ZuConnect: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "91312aa1-5f74-4264-bdeb-f4a3ddb8670c",
      eventName: "ZuConnect",
      productId: "cc9e3650-c29b-4629-b275-6b34fc70b2f9",
      productName: "Resident",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "54863995-10c4-46e4-9342-75e48b68d307",
      eventName: "ZuConnect",
      productId: "d2123bf9-c027-4851-b52c-d8b73fc3f5af",
      productName: "First Week",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "797de414-2aec-4ef8-8655-09df7e2b6cc6",
      eventName: "ZuConnect",
      productId: "d3620f38-56a9-4235-bea8-0d1dba6bb623",
      productName: "Scholarship",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "05e0c4e8517758da3a26c80310ff2fe65b9f85d89dfc9c80e6d0b6477f88173e",
        "29ae64b615383a0ebb1bc37b3a642d82d37545f0f5b1444330300e4c4eedba3f",
      ],
      eventId: "f7370f63-b9ae-480c-9ded-0663f1922bef",
      eventName: "ZuConnect",
      productId: "0179ed5b-f265-417c-aeaa-ac61a525c6b0",
      productName: "Organizer",
    },
  ],
  Vitalia: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "0d3388a18b89dd012cb965267ab959a6ca68f7e79abfdd5de5e3e80f86821a0d",
        "0babbc67ab5da6c9245137ae75461f64a90789ae5abf3737510d5442bbfa3113",
      ],
      eventId: "9ccc53cb-3b0a-415b-ab0d-76cfa21c72ac",
      eventName: "Vitalia",
      productId: "cd3f2b06-e520-4eff-b9ed-c52365c60848",
      productName: "Resident",
    },
  ],
  AgoraCore: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204",
      ],
      productId: "6c390028-59be-564e-9b3c-33c4af64b8b3",
      eventId: "21b7c7a1-55d4-50ff-9ca5-4f3644a24680",
      eventName: "AgoraCity0",
      productName: "Founder",
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204",
      ],
      productId: "323c4db4-f999-5839-afc1-ab8e126e4c89",
      eventId: "fddd7e9a-8e7a-5b54-a5df-deb408d6ab3d",
      eventName: "AgoraCity0",
      productName: "Contributor",
    },
  ],
  ZuArchitects: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "6fdddc6c-0f84-5176-b950-1107550be180",
      eventName: "zu-architects",
      productId: "872e8b73-20b7-50bd-81f8-e31d59ec58c5",
      productName: "architect"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "6fdddc6c-0f84-5176-b950-1107550be180",
      eventName: "zu-architects",
      productId: "90344f48-a213-59ba-9f84-77e8094043e3",
      productName: "Speaker"
    }
  ],
  ZuVillageGeorgia: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "6f5f194b-97b5-5fe9-994d-0998f3eacc75",
      eventName: "ZuVillage Georgia",
      productId: "aecf9f84-b92f-5b40-8541-cbb48f4d6267",
      productName: "Contributor"
    }
  ],
  EdgeEsmeraldaLocal: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "63502757-b6fc-4a98-8bbb-76cb901d63fe",
      eventName: "Edge Esmeralda Local",
      productId: "08bae5ef-3686-4280-8631-cc63792c2a77",
      productName: "Resident"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "63502757-b6fc-4a98-8bbb-76cb901d63fe",
      eventName: "Edge Esmeralda Local",
      productId: "81cdaac0-8970-4073-a328-6d595276a361",
      productName: "Supporter"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "63502757-b6fc-4a98-8bbb-76cb901d63fe",
      eventName: "Edge Esmeralda Local",
      productId: "33a4ed92-d1ba-49b4-91e7-4f92cd603e48",
      productName: "Patron"
    }
  ],
  EdgeEsmeralda: [
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "21c7db2e-08e3-4234-9a6e-386a592d63c8",
      eventName: "Edge Esmeralda",
      productId: "e669fdde-a8cc-4aa2-af5e-79f6f12378a0",
      productName: "Issued"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "21c7db2e-08e3-4234-9a6e-386a592d63c8",
      eventName: "Edge Esmeralda",
      productId: "e0e95c9d-090c-41e7-bcd5-b7d8a518cf42",
      productName: "Scholar - Week 2"
    },
    {
      pcdType: "eddsa-ticket-pcd",
      publicKey: [
        "1ebfb986fbac5113f8e2c72286fe9362f8e7d211dbc68227a468d7b919e75003",
        "10ec38f11baacad5535525bbe8e343074a483c051aa1616266f3b1df3fb7d204"
      ],
      eventId: "21c7db2e-08e3-4234-9a6e-386a592d63c8",
      eventName: "Edge Esmeralda",
      productId: "e9e0338b-c2ef-470a-a98e-ad7ee21a183a",
      productName: "Weekend Day Ticket"
    }
  ]
}
