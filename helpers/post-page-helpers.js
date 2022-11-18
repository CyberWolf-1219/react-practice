function PreparePostContent(content) {
  if (!content) {
    return;
  }

  let elements = [];

  content.split("\n").map((line, index) => {
    if (line !== "") {
      elements.push(<p key={index}>{line}</p>);
    }
  });

  return elements;
}

export { PreparePostContent };
