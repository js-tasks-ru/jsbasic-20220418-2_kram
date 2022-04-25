function getMinMax(str) {
  let arrayOfNumbers = str.split(" ").filter( word => Number( word ) )
  let result = {
  	min: Math.min(...arrayOfNumbers),
  	max: Math.max(...arrayOfNumbers),
	}
	return result
}
