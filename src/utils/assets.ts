const DO_SPACES_URL =
  "https://general-static-assets.nyc3.digitaloceanspaces.com/website-assets";

export const getImagePath = (path: string): string => {
  if (process.env.NODE_ENV !== "production") {
    return `https://general-static-assets.nyc3.digitaloceanspaces.com/website-assets${path}`;
    // TODO: reverse these comments to test DO images on localhost:
    //return path;
  }
  return `${DO_SPACES_URL}${path}`;
};

// For non-image assets that should stay local
export const getAssetPath = (path: string): string => {
  return path; // Always return local path
};
