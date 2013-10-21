Progressive Enhancement
Or, Only Do Little Bits At A Time

Begin with local data. Generate one paragraph per datum, display data as content of paragraph tag. :step1:

Hey, those aren't in alphabetical order! I want to sort them. :step2:

OK, but I want a histogram plot, not a bunch of text. To create a plot, we're going to need to transform the data into SVG elements instead of HTML elements. Our initial goal is a column of rectangles. To plot a rectangle, we need to know where its top-left corner is, plus its height and width. :step3: