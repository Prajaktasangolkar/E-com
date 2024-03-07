// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log("login data", data);
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}
export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/auth/check", {
        headers: {
          credentials: true,
        },
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function verifyEmail(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/auth/verifyEmail", {
        method: "POST",
        body: JSON.stringify(email),
        headers: { "content-type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(" data", data);
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}
export function signOut(userId) {
  return new Promise(async (resolve) => {
    //TODO: ons erver we will remove user session info;
    fetch("http://localhost:8080/auth/signout", {
      credentials: "include",
    });
    resolve({ data: "success" });
  });
}
