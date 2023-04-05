const versesRomans = [
  `"...for all have sinned and fall short of the glory of God..." —Romans 3:23`,
  `"But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us." —Romans 5:8`,
  `"For the wages of sin is death, but the gracious gift of God is eternal life in Christ Jesus our Lord." —Romans 6:23`,
  `"There is therefore now no condemnation for those who are in Christ Jesus" —Romans 8:1`,
  `"...that if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved..." —Romans 10:9`,
]

const randomVerse =
  versesRomans[Math.floor(Math.random() * versesRomans.length)]

document.querySelector("#verseToday").innerHTML = randomVerse
