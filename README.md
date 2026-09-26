# 100 Algorithms Challenge (TypeScript)

My workspace for the *100 Algorithms Challenge*, a set of interview-style coding problems. I solve them in TypeScript. The repo has 103 problem folders, and each one contains a problem statement (`README.md`) and a `.ts` file with the function signature and sample calls. Nine of the problems are solved so far. The rest are still unsolved starter files.

> Built in July 2019 as interview practice. The repository is kept as it was then.

## Attribution

I did not write the problem statements or starter files. They come from the Udemy course *The 100 Algorithms Challenge: How to Ace the JavaScript Coding Interview*, and 82 of the problems link back to their original source on CodeFights (now CodeSignal). The TypeScript solutions are my own. The course's per-problem READMEs are included unchanged.

## Solved problems

| Problem | What it does | Approach |
| --- | --- | --- |
| [absoluteValuesSumMinimization](absoluteValuesSumMinization/absoluteValuesSumMinization.ts) | Find the `x` in a sorted array that minimizes the sum of absolute differences | Take the (lower) median by index |
| [add](add/add.ts) | Sum two numbers, then any number of arguments | Arithmetic, then rest parameters with `reduce` |
| [addBorder](addBorder/addBorder.ts) | Frame a text "picture" with `*` characters | `map` plus `String.prototype.repeat` |
| [addTwoDigits](addTwoDigits/addTwoDigits.ts) | Sum the digits of a two-digit number | Split the number into digits and `reduce` |
| [adjacentElementsProduct](adjacentElementsProduct/adjacentElementsProduct.ts) | Largest product of two adjacent array elements | Single pass that tracks the maximum |
| [allLongestStrings](allLongestStrings/allLongestStrings.ts) | Return every string that ties for the longest length | Single pass that resets the result when a longer string appears |
| [almostIncreasingSequence](almostIncreasingSequence/almostIncreasingSequence.ts) | Can the array become strictly increasing by removing at most one element? | Count the descents and stop early |
| [alphabeticShift](alphabeticShift/alphabeticShift.ts) | Replace each letter with the next one, wrapping `z` to `a` | Character codes |
| [alphabetSubsequence](alphabetSubSequence/alphabetSubSequence.ts) | Is the string a strictly increasing subsequence of the alphabet? | Compare adjacent character codes |

## Tech stack

- TypeScript 3.5 (the only dependency)
- Node.js to run the compiled output

## Getting started

```bash
git clone https://github.com/shanehobson/100-algorithms-challenge.git
cd 100-algorithms-challenge
npm install
```

Each solution is a standalone script that prints its own sample calls. Compile one to a scratch directory and run it:

```bash
npx tsc --target es2017 --outDir build addBorder/addBorder.ts
node build/addBorder.js
# [ '*****', '*abc*', '*ded*', '*****' ]
```

Use `--target es2017` or later. TypeScript's default ES3 target does not include APIs such as `String.prototype.repeat`.

There is no automated test suite. Each file checks itself with `console.log` calls on the examples from its problem statement.

## Remaining problems

<details>
<summary>94 unsolved starter files</summary>

- [alternatingSums](alternatingSums/alternatingSums.ts)
- [areEquallyStrong](areEquallyStrong/areEquallyStrong.ts)
- [areSimilar](areSimilar/areSimilar.ts)
- [arrayChange](arrayChange/arrayChange.ts)
- [arrayConversion](arrayConversion/arrayConversion.ts)
- [arrayMaxConsecutiveSum](arrayMaxConsecutiveSum/arrayMaxConsecutiveSum.ts)
- [arrayMaximalAdjacentDifference](arrayMaximalAdjacentDifference/arrayMaximalAdjacentDifference.ts)
- [arrayPreviousLess](arrayPreviousLess/arrayPreviousLess.ts)
- [arrayReplace](arrayReplace/arrayReplace.ts)
- [avoidObstacles](avoidObstacles/avoidObstacles.ts)
- [bishopAndPawn](bishopAndPawn/bishopAndPawn.ts)
- [boxBlur](boxBlur/boxBlur.ts)
- [candies](candies/candies.ts)
- [caseInsensitivePalimdrome](caseInsensitivePalimdrome/caseInsensitivePalindrome.ts)
- [centuryFromYear](centuryFromYear/centuryFromYear.ts)
- [characterParity](characterParity/characterParity.ts)
- [checkPalindrome](checkPalindrome/checkPalindrome.ts)
- [chessBoardCellColor](chessBoardCellColor/chessBoardCellColor.ts)
- [chunkyMonkey](chunkyMonkey/chunkyMonkey.ts)
- [circleOfNumbers](circleOfNumbers/circleOfNumbers.ts)
- [commonCharacterCount](commonCharacterCount/commonCharacterCount.ts)
- [companyBotStrategy](companyBotStrategy/companyBotStrategy.ts)
- [compareIntegers](compareIntegers/compareIntegers.ts)
- [composeRanges](composeRanges/composeRanges.ts)
- [confirmEnding](confirmEnding/confirmEnding.ts)
- [containsCloseNums](containsCloseNums/containsCloseNums.ts)
- [containsDuplicates](containsDuplicates/containsDuplicates.ts)
- [convertCelsiusToFahrenheit](convertCelsiusToFahrenheit/convertCelsiusToFahrenheit.ts)
- [convertString](convertString/convertString.ts)
- [crossingSum](crossingSum/crossingSum.ts)
- [depositProfit](depositProfit/depositProfit.ts)
- [differentSymbolsNaive](differentSymbolsNaive/differentSymbolsNaive.ts)
- [digitDegree](digitDegree/digitDegree.ts)
- [domainType](domainType/domainType.ts)
- [electionWinners](electionWinners/electionWinners.ts)
- [encloseInBrackets](encloseInBrackets/encloseInBrackets.ts)
- [evenDigitsOnly](evenDigitsOnly/evenDigitsOnly.ts)
- [extractEachKth](extractEachKth/extractEachKth.ts)
- [extractMatrixColumn](extractMatrixColumn/extractMatrixColumn.ts)
- [factorializeANumber](factorializeANumber/factorializeANumber.ts)
- [fancyRide](fancyRide/fancyRide.ts)
- [fareEstimator](fareEstimator/fareEstimator.ts)
- [fermactor](fermactor/fermactor.ts)
- [findClosestPair](findClosestPair/findClosestPair.ts)
- [findEmailDomain](findEmailDomain/findEmailDomain.ts)
- [firstDigit](firstDigit/firstDigit.ts)
- [firstDuplicate](firstDuplicate/firstDuplicate.ts)
- [firstNotRepeatingCharacter](firstNotRepeatingCharacter/firstNotRepeatingCharacter.ts)
- [flattenArray](flattenArray/flattenArray.ts)
- [growingPlant](growingPlant/growingPlant.ts)
- [houseNumbersSum](houseNumbersSum/houseNumbersSum.ts)
- [houseOfCats](houseOfCats/houseOfCats.ts)
- [htmlEndTagByStartTag](htmlEndTagByStartTag/htmlEndTagByStartTag.ts)
- [incorrectPasswordAttempts](incorrectPasswordAttempts/incorrectPasswordAttempts.ts)
- [incrementalBackups](incrementalBackups/incrementalBackups.ts)
- [integerToStringOfWixedWidth](integerToStringOfWixedWidth/integerToStringOfFixedWidth.ts)
- [isLucky](isLucky/isLucky.ts)
- [isTandemRepeat](isTandemRepeat/isTandemRepeat.ts)
- [largestNumber](largestNumber/largestNumber.ts)
- [largestOfFour](largestOfFour/largestOfFour.ts)
- [lateRide](lateRide/lateRide.ts)
- [launchSequenceChecker](launchSequenceChecker/launchSequenceChecker.ts)
- [longestDigitsPrefix](longestDigitsPrefix/longestDigitsPrefix.ts)
- [makeArrayConsecutive2](makeArrayConsecutive2/makeArrayConsecutive2.ts)
- [matrixElementsSum](matrixElementsSum/matrixElementsSum.ts)
- [maxMultiple](maxMultiple/maxMultiple.ts)
- [mineSweeper](mineSweeper/mineSweeper.ts)
- [minimalNumberOfCoins](minimalNumberOfCoins/minimalNumberOfCoins.ts)
- [missingLetters](missingLetters/missingLetters.ts)
- [mostFrequentDigitSum](mostFrequentDigitSum/mostFrequentDigitSum.ts)
- [newNumeralSystem](newNumeralSystem/newNumeralSystem.ts)
- [pagesNumberingWithInk](pagesNumberingWithInk/pagesNumberingWithInk.ts)
- [palindromeRearranging](palindromeRearranging/palindromeRearranging.ts)
- [pigLatin](pigLatin/pigLatin.ts)
- [proCategorization](proCategorization/proCategorization.ts)
- [properNounCorrection](properNounCorrection/properNounCorrection.ts)
- [ratingThreshold](ratingThreshold/ratingThreshold.ts)
- [reflectString](reflectString/reflectString.ts)
- [reverseAString](reverseAString/reverseAString.ts)
- [seatsInTheater](seatsInTheater/seatsInTheater.ts)
- [seekAndDestroy](seekAndDestroy/seekAndDestroy.ts)
- [shapeArea](shapeArea/shapeArea.ts)
- [sortByHeight](sortByHeight/sortByHeight.ts)
- [sortByLength](sortByLength/sortByLength.ts)
- [squareDigitsSequence](squareDigitsSequence/squareDigitSequence.ts)
- [stolenLunch](stolenLunch/stolenLunch.ts)
- [stringsConstruction](stringsConstruction/stringsConstruction.ts)
- [sumAllPrimes](sumAllPrimes/sumAllPrimes.ts)
- [sumOddFibonacciNums](sumOddFibonacciNums/sumOddFibonacciNums.ts)
- [sumOfTwo](sumOfTwo/sumOfTwo.ts)
- [switchLights](switchLights/switchLights.ts)
- [tasksType](tasksType/tasksType.ts)
- [uniqueDigitProducts](uniqueDigitProducts/uniqueDigitsProducts.ts)
- [validTime](validTime/validTime.ts)

</details>
