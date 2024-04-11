---
title: Exercise 4 – Conduct Analysis – Calculated Fields and Analytic Functions
description: Next Level Data Preparation
---
### 💡 Key Points

* Tableau Prep supports many of the same calculation types as Tableau Desktop, including Aggregation, Date, Logical, Number, String, and Type Conversion expressions.
* Level of Detail (LOD) expressions allow you to calculate data at multiple levels of granularity in the same table without needing to create a separate Aggregation Step.
* Rank, Running Calculation, and Moving Calculations allow you to perform a function across a specific slice of rows (like a window function in SQL).
* You can write rank, Running calculation, and Moving calculations from scratch in a calculated field, or you can use the Visual Editor to help build out your logic.
* Use multiple Clean Steps to organize your logic and make it easier to keep it updated. Loading all of your calculations into one step increases the likelihood of dependencies and things breaking when you change them over time.

### 📙 Resource Quick Links

## 🎯 Your Task

## 📝 Instructions

* **[Step 1](/../../reference/e4s1sol) –** Add a Clean Step after your Join Step. Name this step 'Table Calculation'.
* **[Step 2](/../../reference/e4s1sol) –** Use the Visual Editor to create a Running Sum of each Sales Segment over Order Date 

    :::tip[Use the following table calculation selections]
    * Group by the 'Segment',
    * Order by the 'Order Date' ascending,
    * Compute using 'Sales,
    * Running calculation aggregator should be 'SUM'
  :::

* **[Step 3](/../../reference/e4s2sol) –** Add a Clean Step after your Join Step. Name this step 'Window Calculation'. Create a calculated field “Order Month” which truncates the “Order Date” to just be the Month / Year
* **[Step 4](/../../reference/e4s2sol) –** Use the Visual Editor to create a 3-month Window Average of NPS called **3 Month Average NPS** over Order Month

    :::tip[Use the following window calculation selections]
    * Order by the 'Order Month' ascending,
    * Compute using 'NPS',
    * Running calculation aggregator should be 'AVG' for the 'previous 2, current' values
  :::


* **[Step 5](/../../reference/e4s3sol) –** Create a calculated field called 'Top Influencer' to determine if a customer's NPS is greater than the '3 Month Average NPS'. The calculation should return 'Top Influencer' if they meet this condition, else should return NULL.

    :::tip[Calculation Logic]
    IF [NPS] > [3 Month Average NPS] THEN 'Top Influencer' ELSE NULL END
    :::