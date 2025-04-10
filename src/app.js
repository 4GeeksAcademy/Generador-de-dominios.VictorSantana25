document.addEventListener("DOMContentLoaded", () => {
  const domainElement = document.getElementById("domain");

  const pronoun = ['my', 'your', 'their'];
  const adj = ['cool', 'strange', 'epic'];
  const noun = ['project', 'idea', 'engine'];
  const extension = '.com';

  const domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(`${p}${a}${n}${extension}`);
      }
    }
  }


  domainElement.innerHTML = domains.map(domain => `
    <div class="col-6 mb-2">
      <li>${domain}</li>
    </div>
  `).join('');
});
