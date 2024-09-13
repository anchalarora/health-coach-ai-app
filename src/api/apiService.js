export const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const firstPostTitle = data[0]?.title;
    return `Here's the title of the first post: "${firstPostTitle}"`;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Sorry, there was an error fetching the data.";
  }
};

export const getData2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const firstPostBody = data[0]?.body;
    return `Here's the body of the first post: "${firstPostBody}"`;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Sorry, there was an error fetching the data.";
  }
};
