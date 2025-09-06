// queries/getCertifications.ts

export const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export const getCertifications = async () => {
  // TODO: Replace with static data
  return [];
};
