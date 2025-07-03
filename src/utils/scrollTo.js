const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId)
  target?.scrollIntoView({ behavior: 'smooth' })
}