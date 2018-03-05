export const iam = {
  url: "http://localhost:8080", //IAM server location
  getCookie: (name = "jwt") => {
    const regexp = new RegExp(
      "(?:^" + name + "|;s*" + name + ")=(.*?)(?:;|$)",
      "g"
    );
    const result = regexp.exec(document.cookie);
    return result === null ? null : result[1];
  }
};

export const api = {
  url: "http://localhost:8081/api" //API server location
};
