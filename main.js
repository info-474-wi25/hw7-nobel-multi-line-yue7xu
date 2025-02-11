// 1: SET GLOBAL VARIABLES
const margin = { top: 50, right: 30, bottom: 60, left: 70 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create the SVG container and group element for the chart
const svgLine = d3.select("#lineChart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// 2: LOAD DATA
d3.csv("nobel_laureates.csv").then(data => {
    // Relevant columns:
    // - fullname -> name (y variable)
    // - year (x variable)
    // - category (color variable)

    // 2.a: REFORMAT DATA
    data.forEach(d => {
        d.year = +d.year;       // Convert year to a number
        d.name = d.fullname;    // Rename column for clarity
    });

    // Check your work:
    // console.log("Raw data:", data);
    // console.log("Years:", data.map(d => d.year));

    // --- STUDENTS START HERE ---
    // 3: PREPARE DATA
    // 3.a: Categorize data into STEM and Non-STEM
    // Example: Group "physics" into STEM, "literature" into Non-STEM

    // 3.b: Group data by categoryGroup and year, and count entries
    // Use d3.rollup to create a nested data structure

    // Check your work:
    // console.log("Categories:", ...);

    // 4: SET SCALES
    // 4.a: Define xScale for years using d3.scaleLinear
    // 4.b: Define yScale based on the max count of laureates
    // 4.c: Define colorScale using d3.scaleOrdinal with categories as the domain

    // 5: PLOT LINES
    // 5.a: CREATE PATH
    // - Use d3.line() to generate paths from grouped data.
    // - Convert the nested data structure into an array of objects containing x (year) and y (count).

    // 5.b: PLOT LINE
    // - Bind data to <path> elements and use the "d" attribute to draw lines.
    // - Add a "class" to each line for styling.

    // 5.c: ADD STYLE
    // - Use the colorScale to set the "stroke" attribute for each line.
    // - Add stroke-width and optional hover effects.

    // 6: ADD AXES
    // 6.a: X-AXIS
    // - Use d3.axisBottom(xScale) to create the x-axis.
    // - Append it to the bottom of the SVG.

    // 6.b: Y-AXIS
    // - Use d3.axisLeft(yScale) to create the y-axis.
    // - Append it to the left of the SVG.

    // 7: ADD LABELS
    // 7.a: Title
    // - Add a text element above the chart for the chart title.

    // 7.b: X-axis label
    // - Add a text element below the x-axis to describe it (e.g., "Year").

    // 7.c: Y-axis label
    // - Add a rotated text element beside the y-axis to describe it (e.g., "Number of Laureates").

    // 8: LEGEND
    // 8.a: CREATE AND POSITION SHAPE
    // - Use <g> elements to create groups for each legend item.
    // - Position each legend group horizontally or vertically.

    // 8.b: ADD COLOR SQUARES
    // - Append <rect> elements to the legend groups.
    // - Use colorScale to set the "fill" attribute for each square.

    // 8.c: ADD TEXT
    // - Append <text> elements to the legend groups.
    // - Position and align the text beside each color square.
});
