---
title: ✏️ Exercise 4 – Conduct Analysis – Calculated Fields and Analytic Functions
description: Next Level Data Preparation
---
[![Skip](/images/skip.png)](#-instructions)
### 💡 Key Points

* Tableau Prep supports many of the same calculation types as Tableau Desktop, including Aggregation, Date, Logical, Number, String, and Type Conversion expressions.
* Level of Detail (LOD) expressions allow you to calculate data at multiple levels of granularity in the same table without needing to create a separate Aggregation Step.
* Rank, Running Calculation, and Moving Calculations allow you to perform a function across a specific slice of rows (like a window function in SQL).
* You can write rank, Running calculation, and Moving calculations from scratch in a calculated field, or you can use the Visual Editor to help build out your logic.
* Use multiple Clean Steps to organize your logic and make it easier to keep it updated. Loading all of your calculations into one step increases the likelihood of dependencies and things breaking when you change them over time.

### 📙 Resource Quick Links

## 🎯 Your Task

In this task, you'll create multi-row calculations in Prep; first we'll create a Running Sum to calculate the cumulative sales over time, and then we'll calculate a window average to smooth out any spikes in the NPS.

:::note[**🔥 HOT Tip 🔥**]
Why do this in Prep? By doing Table and Window calculations before you get to Tableau Desktop, you can
* Improve performance so that Tableau doesn't have to do calculations on the fly.
* Bump calculations up in the [Order of Operations](https://help.tableau.com/current/pro/desktop/en-us/order_of_operations.htm) making them available as filter values
:::

## 📝 Instructions

* **<a href="/../../reference/e4s1sol" target="_blank">Step 1</a> –** Add a Clean Step after your Join Step. Name this step 'Table Calculation'.
* **<a href="/../../reference/e4s1sol" target="_blank">Step 2</a> –** Use the Visual Editor to create a Running Sum of each Sales Segment over Order Date 

    :::tip[Use the following table calculation selections]
    * Group by the 'Segment',
    * Order by the 'Order Date' ascending,
    * Compute using 'Sales,
    * Running calculation aggregator should be 'SUM'
  :::

* **<a href="/../../reference/e4s4sol" target="_blank">Step 3</a> –** Add a Clean Step after your Table Calculation step. Name this step 'Window Calculation'. Create a calculated field “Order Month” which truncates the “Order Date” to just be the Month / Year
* **<a href="/../../reference/e4s2sol" target="_blank">Step 4</a> –** Use the Visual Editor to create a 3-month Window Average of NPS called **3 Month Average NPS** over Order Month

    :::tip[Use the following window calculation selections]
    * Order by the 'Order Month' ascending,
    * Compute using 'NPS',
    * Running calculation aggregator should be 'AVG' for the 'previous 2, current' values
  :::


* **<a href="/../../reference/e4s3sol" target="_blank">Step 5</a> –** Create a calculated field called 'Top Influencer' to determine if a customer's NPS is greater than the '3 Month Average NPS'. The calculation should return 'Top Influencer' if they meet this condition, else should return NULL.

    :::tip[Calculation Logic]
    IF [NPS] > [3 Month Average NPS] THEN 'Top Influencer' END
    :::