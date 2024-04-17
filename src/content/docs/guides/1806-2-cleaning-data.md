---
title: ✏️ Exercise 2 - Tidy Up - The Clean Step
description: Next Level Data Preparation
---
[![Skip](/images/skip.png)](#-instructions)
### 💡 Key Points

* You can perform string cleaning functions, change your data types, change your date formats, rename, merge, split, remove characters, group, and so much more with the Clean Step.
* But wait, there’s more! The Clean Step is where you can also create calculated fields!
* When in doubt, do the bulk of your cleaning and calculation in Tableau Prep flows rather than in your workbooks. Moving this logic out of your workbooks will help them run more efficiently, which means a better user experience for your stakeholders. Having a clean, transformed data set also increases the likelihood that it can be reused for other reporting within your organization.

### 📙 Resource Quick Links

[Tableau Documentation - Clean and Shape Data](https://help.tableau.com/current/prep/en-us/prep_clean.htm)

## 📝 Instructions

Now that you’ve brought data into the flow, you need to clean it before you can transform and combine it. In this exercise, you will explore your data in the Profile Pane and use pre-built cleaning options to correct string formatting issues.

Please follow these steps for Exercise 2:

* **<a href="/../../reference/e2s1sol" target="_blank">Step 1</a> –** Add a Clean Step after the Orders Input step.

* **<a href="/../../reference/e2s2sol" target="_blank">Step 2</a> –** On the Orders Clean Step, remove the question marks (?) and exclamation points (!) from values in the Sub-Category field by using the Remove Punctuation option.

* **<a href="/../../reference/e2s1sol" target="_blank">Step 3</a> –** Add a Clean Step after the Shipping Input Step.

* **<a href="/../../reference/e2s4sol" target="_blank">Step 4</a> –** On the Shipping Clean Step, group the Shipping Status field by Spelling to correct the rows where Ordered and Shipped are misspelled.

:::note[**🔥 HOT Tip 🔥**]
Be kind to your future self; Prep lets you leave notes and descriptions on each of the steps in the flow, *and* on each change within a single step so you can look back later.
:::

## **Optional Challenge**

Try out a few other cleaning functions:

* Use the ‘Split Values’ cleaning function on the ‘Product ID’ field to test out splitting on a delimiter.
* Use the ‘Make Uppercase’ option to make all three values in the ‘Segment’ field uppercase (found by going to More Options […] and then choosing ‘Clean’).
* Expand the Changes Pane and click on the Pencil icon next to each of these cleaning functions to examine the calculation Prep automatically writes for you.
* Remember that you can also undo these functions by expanding the Changes Pane and clicking on the ‘x’ next to each of these functions.
