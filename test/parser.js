unction extractAllInfo() {
  const htmlContent = document.body.innerHTML;
  const regex = /<h4 class="integration-item-heading"><a href="[^"]*"><strong class="bold-text-\d+">(.*?)<\/strong><\/a><\/h4>.*?<div>(.*?)<\/div><\/div>/gs;
  
  const results = [];
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    results.push({
      title: match[1],
      description: match[2]
    });
  }
  return results;
}
var allResults = extractAllInfo();
console.log(allResults);
