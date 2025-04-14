---
title: ✏️ Exercise 4 – Conduct Analysis – Calculated Fields and Analytic Functions
description: Next Level Data Preparation
---
[![Skip](/images/skip.png)](#-instructions)
### 💡 Key Points

* Tableau Prep supports splitting of data in fields/columns and parsing out the values to be stored in their own fields
* You can parse out field data for a number of reasons, such as identifying key words when performing sentiment analysis
* Calculated Fields can have various purposes to filter, check, or apply custom calculations that are not available in the existing Tableau Prep Builder options
* If you need to adjust the granularity of your data, use the Aggregate option to create a step to group and aggregate data. Whether data is aggregated or grouped depends on the data type (string, number, or date).

### 📙 Resource Quick Links

* [Tableau Documentation – Pivoting your Data](https://help.tableau.com/current/prep/en-us/prep_pivot.htm)

## 🎯 Your Task

In this task, you'll search through a set of free-text reviews for multiple keywords; first we'll import a new set of data, and then we'll manipulate the data to get it into the proper form to analyse. After, we'll join the data back into the overall dataset so it's ready for future parameterization

:::note[**🔥 HOT Tip 🔥**]
Why do this in Prep? Things like wildcard pivots aren't native in Tableau Desktop.
:::

## 📝 Instructions

* **<a href="/../../reference/e5s1sol" target="_blank">Step 1</a> –** Create an Input Step for Damaged Orders in the flow
* **<a href="/../../reference/e5s2sol" target="_blank">Step 2</a> –** Add a Clean step to the Damaged Orders input step to parse out all the keywords in Product Review into multiple columns

    :::tip[Actions within your clean step]
* Remove the following Columns: “Sub-Category,” “Product ID,” “Product Name,” and “Product Rating”
  *  To remove click on the column name, then click the ellipses (i.e. the three dots ...), and finally click Remove

* Perform a Custom Split on the “Product Review” column - this will be done using the space between the words
  * Click on the “Product Review” column name, then click the ellipses (i.e. the three dots ...),
  * In the “Use the separator” field, simply add a space
  * In the “Split off” field, select All
  * Click Split
  :::

* **<a href="/../../reference/e5s3sol" target="_blank">Step 3</a> –** Add a Pivot  step to see Product Review key words we split out into their own rows

  :::tip[Use the following split calculation selections]
* In the Pivoted Fields pane, click on ‘Use wildcard search to pivot’
* Input “Split, ” into the free text field under “Product Review Split”
    :::
* **<a href="/../../reference/e5s4sol" target="_blank">Step 4</a> –** Clean up the formatting of Product Review Split

    :::tip[Items to clean 🧹]
* Click on the Pivoted column name, and then click the ellipses (i.e. the three dots ...)
  * Remove Punctuation
  * Make Lowercase
  * * Exclude Null / Blank Values
  :::


* **<a href="/../../reference/e5s5sol" target="_blank">Step 5</a> –** Join the previous Clean output with the Window Calculation output from Exercise 4

    :::tip[Join logic]
* Use “Order ID” as the primary key to join the two outputs
* Leave the Join Type as Inner
    :::

* **<a href="/../../reference/e5s6sol" target="_blank">Step 6</a> –** Add an Aggregation Step

  :::tip[Aggregation Fields]
* In Grouped Fields, drop in the “Customer ID” and “Customer Name” fields
* In Aggregated Fields, drop in SUM
  :::