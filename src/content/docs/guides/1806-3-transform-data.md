---
title: ✏️ Exercise 3 - Transform Data – Pivot & Join
description: Next Level Data Preparation
---
[![Skip](/images/skip.png)](#-instructions)
### 💡 Key Points

* Pivoting your data allows you to change it from wide to long (columns to rows) or from long to wide (rows to columns) while performing aggregation.
* You can pivot on multiple fields and use wildcard logic to choose which fields are pivoted. 
* Prior to a join, you can use row deduplication (2024.1) to ensure your data is ready to go.
* Tableau Prep supports Left, Right, Inner, Left Only, Right Only, Not Inner, and Full join types.

### 📙 Resource Quick Links

* [Tableau Documentation - Pivot Your Data](https://help.tableau.com/current/prep/en-us/prep_pivot.htm)
* [Tableau Documentation - Join Your Data](https://help.tableau.com/current/prep/en-us/prep_combine.htm#join-your-data)

## 🎯 Your Task

In this exercise, you will use a Pivot Step to denormalize your Shipping data so that the order dates and shipping dates are in two columns rather than rows. The goal is to change the structure of the table as illustrated below:

| OrderID | Shipping Status | Date |
| -------- | ----------- |----------- |
| Order A | Ordered | 10/10/2023 |
| Order A | Shipped | 12/10/2023 |

<br>
Once the rows are pivoted to columns, this table should look like:
<br>

| OrderID | Ordered | Shipped |
| -------- | ----------- |----------- |
| Order A | 10/10/2023 | 12/10/2023  |


From there, you will join your Orders and Shipping data together into one unified data set.


## 📝 Instructions

### Exercise 3a - Pivoting Rows to Columns

* **<a href="/../../reference/e3s1sol" target="_blank">Step 1</a> –** Add a Pivot Step after the Shipping Clean Step.
* **<a href="/../../reference/e3s1sol" target="_blank">Step 2</a> –** Pivot the two values in the Shipping Status field (Ordered and Shipped) from **rows** to **columns** and select the Date field as the one to aggregate in the corresponding new columns.
* **<a href="/../../reference/e3s1sol" target="_blank">Step 3</a> –** Change the aggregation being performed on the Date field so that it shows an actual date instead of a count of the dates.

### Exercise 3b – Joining Orders with Shipping Data

* **<a href="/../../reference/e3s3sol" target="_blank">Step 1</a>–** Inner Join the Orders to the Shipping data by clicking on the Orders Clean Step, dragging and hovering it over the Shipping Pivot step, and dropping it onto the ‘Join’ box when it appears. Your join will be done on the Order ID field.

:::note[**🔥 HOT Tip 🔥 –**]
Push Cross-Database joins or unions **later** in your flows. This often helps reduce the number of rows / columns needing to be joined, and when using a database will leverage the databases query ability where possible.
:::