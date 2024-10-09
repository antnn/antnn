const regex = /<h4 class="integration-item-heading"><a href="[^"]*"><strong class="bold-text-\d+">(.*?)<\/strong><\/a><\/h4>.*?<div>(парсер[\s\S]*?)<\/div><\/div>/gsi;
function extractAllInfo() {
  const htmlContent = document.body.innerHTML;
  const results = [];
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    results.push({
      title: match[1].replace(/<br>/gi, ' ').trim(),
      description: match[2].replace(/<[^>]*>/g, '').trim()
    });
  }
  return results;
}
var allResults = extractAllInfo();
console.log(allResults);


function Words() {
    let html = document.body.innerHTML;
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    let text = html.replace(/<[^>]*>/g, '');
    let words = text.trim().split(/\s+/);
    words = words.filter(word => word.length > 3);
    return words
}
console.log(`Number of words longer than 3 characters: ${Words().length}`);

