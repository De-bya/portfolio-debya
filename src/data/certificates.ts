export interface Certificate {
  title: string;
  issuer: string;
  logo?: string;
  logos?: string[];
  logoSize?: string;
  link: string;
  isLocal: boolean;
  richIssuer?: string;
  certificateImage?: string;
}

export interface CertificateYear {
  year: number;
  certificates: Certificate[];
}

export const certificatesByYear: CertificateYear[] = [
  {
    year: 2025,
    certificates: [
      {
        title: "Big Data Engineer Certificate",
        issuer: "IBM",
        logo: "public/logos/IBM_logo.svg",
        link: "https://www.credly.com/badges/1c123b63-14f9-4913-9922-cac91c2fa6e6",
        isLocal: false,
      },
      // {
      //   title: "TON TITRE DU COURS 1",
      //   issuer: "LinkedIn Learning",
      //   logo: "logos/linkedin.svg",
      //   link: "LIEN_DU_COURS_1",
      //   isLocal: false,
      // },
      // {
      //   title: "TON TITRE DU COURS 2",
      //   issuer: "LinkedIn Learning",
      //   logo: "logos/linkedin.svg",
      //   link: "LIEN_DU_COURS_2",
      //   isLocal: false,
      // },
    ],
  },

  {
    year: 2024,
    certificates: [
      {
        title: "Astronomer Certification for Apache Airflow 2 Fundamentals",
        issuer: "Astronomer",
        logo: "public/logos/astronomer.png",
        link: "https://www.credly.com/badges/cea567c5-0a61-4887-a678-f8afb26265b6",
        isLocal: false,
      },
      {
        title: "AWS Academy Graduate - Machine Learning Foundations",
        issuer: "Amazon Web Services",
        logo: "public/logos/aws.png",        
        link: "https://www.credly.com/badges/ba0a10b6-a4fc-4069-a553-044b69bbbb33",
        isLocal: false,
      },
      {
        title: "Career Essentials in Generative AI",
        issuer: "LinkedIn Learning and Microsoft",
        logos: ["public/logos/Linkedin-logo.png", "public/logos/Microsoft.png"],
        link: "https://www.linkedin.com/learning/certificates/bc83e6886ffdecfe3510ed24de864609a1962ff66576249f5dbf5a32f2c4b155/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BfE2%2BxTNyRBC%2BVP%2Bl4EfrJA%3D%3D",
        isLocal: false,
      },
      {
        title: "AWS Academy Graduate - Cloud Data Pipeline Builder",
        issuer: "Amazon Web Services",
        logo: "public/logos/aws.png", 
        link: "https://www.credly.com/badges/84e5f802-d40f-4a6d-b5bc-9fe418eb27c2",
        isLocal: false,
      },
      {
        title: "Career Essentials in Data Analysis",
        issuer: "LinkedIn Learning and Microsoft",
        logos: ["public/logos/Linkedin-logo.png", "public/logos/Microsoft.png"],
        link: "https://www.linkedin.com/learning/certificates/59f4f35d928020b78428158a22235011cc645595e9419c3fa7ec7a3a38373e0b/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BfE2%2BxTNyRBC%2BVP%2Bl4EfrJA%3D%3D",
        isLocal: false,
      },
      {
        title: "AWS Academy Graduate - Data Engineering",
        issuer: "Amazon Web Services",
        logo: "public/logos/aws.png", 
        link: "https://www.credly.com/badges/ac208606-44b0-453c-a45b-9fe7ea6b411e",
        isLocal: false,
      },
    ],
  },
];
