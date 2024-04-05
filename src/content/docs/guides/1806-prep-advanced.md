---
title: Tableau Prep for Pros 
description: Next Level Data Preparation
---
Thanks for attending 'Prepare to take your Prep to the next level!', our advanced Tableau Prep training session

Thanks for being part of TC 23 and we look forward to this journey together. 


* We will be exploring how you can take your data preparation up a level using Tableau Prep Builder. This is designed as an advanced level session, so you should have some familiarity with Prep Builder and its basic features.
* The goal is for us to build one flow together through a series of 5 exercises, but don't fret if you get out of sync! On your VM desktop there is a folder called 'Exercise Answers' that contains versions of the flow updated with the completed steps for each exercise. You can use these to get caught up if needed, but please try to follow along.
* If you have any questions during the session, raise your hand, and a volunteer will come and assist you
* After you’re done, please fill out our feedback survey! One of the best parts of the Tableau Community is how we can all learn from each other and improve.

To log into your VM, you will need to use the following credentials:

## What is Tableau Prep Builder?

Prep Builder provides a visual interface to connect to, clean, combine, and transform data from a variety of sources. Three coordinated views let you see row-level data, profiles of each column, and your entire data preparation process. With each action, you instantly see your data change, even on millions of rows of data. Once transformed, you can write your data out to local files or publish directly to Tableau Server. It’s easy to open your output with Tableau Desktop or share it with others via Tableau Server or Tableau Cloud, reducing friction and helping you bridge the gap between data preparation and analytics.


## Your mission today

* You are a member of Superstore's Analytics Team, which supports reporting across Superstore's Marketing, Finance, Sales, and Operations teams. Recently, Superstore's VP of Operations reached out to you with a new request for exploratory analysis.
* Anecdotally, the Operations Team has seen an increase in shipping delays they're worried is starting to hurt customer happiness.
* They want you to explore customer satisfaction trends, and have provided you with flat files containing orders and shipping data from the past few years.
* They want you to look at data for last year only, January through December of 2023.
* Eventually this will become a fully-fledged Tableau workbook, but right now you need to get familiar with the data and figure out how to get it ready for analysis.
* Your top priority as you explore and prep this data is to identify which customers are the least happy in each state/province. These are the customers the Operations team will proactively reach out to, so they need this data before the dashboard is built.
* You'll keep the following "business" questions in mind to guide how you transform your data:

    1. What is each customer's average Net Promoter Score (NPS)?
    2. Which customers are our 'top influencers' and have exceptional Net Promoter Scores each month?

* We will clean and restructure our data in exercises 1 through 3. We will directly answer these questions in exercise 4. In exercise 5, we will explore how you can use parameters to dynamically filter to answer these questions for a subset of your data.

>[!knowledge] **What's a Net Promoter Score (NPS)?** 
>
> NPS is a single-question survey that measures customer experience and loyalty: "How likely are you to recommend our our company to a friend or colleague?" It provides respondents with a scale from 0 to 10 to rate their likelihood. Respondents are considered Promoters if they answer a 9 or 10, Passives if they answer 7 or 8, and Detractors if they answer 0 to 6.

# ✏️ Exercise 1 - Connect to Data: The Input Step

### 💡 Key Points

* You can connect to a variety of on-prem and cloud-based data sources natively in Tableau Prep Builder using out-of-the-box connectors.
* There are options to filter, hide or remove fields, change data types, update sampling logic, and many more transformations on the Input Step.
* It’s a good idea to configure your Input Step to bring in just the data you need so that your Flow remains performant.

### 📙 Resource Quick Links

* [Tableau Documentation - Connect to Data](https://help.tableau.com/current/prep/en-us/prep_connect.htm)

## 🎯 Your Task

As mentioned, you’ll be working with **4** files that represent **2** data sources: Orders (Orders1.csv, Orders2.csv, Orders3.csv) and Shipping (Shipping.csv).
To get started:


* Double click on the Prep Builder icon on your VM desktop to open the application.
* We are going to build a flow from scratch, so you will click on the blue ‘Connect to Data’ button.
* You can connect to a number of different data sources; because our data are in CSV files, you will select the ‘Text File’ option.
* In the ‘Open’ window, navigate to the ‘Data Sources’ file on the desktop and select orders1.csv.

## 📝 Instructions

* **Step 1 –** Create **one** Input Step for Orders that unions all 3 of the orders files. Use File Filters and syntax matching to bring in only the Orders files and not the Shipping file for the Orders Input Step. The files are in a folder called *'Data Sources'* on the desktop of your machine. 

    >[!hint][How to create a file input and union](instructions258460/2024-04-02_13-55-32.gif)


* **Step 2 –** On the Orders Input Step, add a relative date filter to the Order Date field that brings in only the data from the year 2023.

    >[!hint][How to create a relative date filter](instructions258460/2024-04-02_14-08-45.gif)


* **Step 3 –** Create an Input Step for the shipping file. You do not need to make any changes to this Input Step.

    >[!hint][How to add in a single file input](instructions258460/2024-04-02_14-40-54.gif)


* [ ] **My data is locked and loaded**




# ✏️ Exercise 2 - Tidy Up: The Clean Step

### 💡 Key Points

* You can perform string cleaning functions, change your data types, change your date formats, rename, merge, split, remove characters, group, and so much more with the Clean Step.
* But wait, there’s more! The Clean Step is where you can also create calculated fields!
* When in doubt, do the bulk of your cleaning and calculation in Tableau Prep flows rather than in your workbooks. Moving this logic out of your workbooks will help them run more efficiently, which means a better user experience for your stakeholders. Having a clean, transformed data set also increases the likelihood that it can be reused for other reporting within your organization.

### 📙 Resource Quick Links

[Tableau Documentation - Clean and Shape Data](https://help.tableau.com/current/prep/en-us/prep_clean.htm)



## 📝 Clean The Data

Now that you’ve brought data into the flow, you need to clean it before you can transform and combine it. In this exercise, you will explore your data in the Profile Pane and use pre-built cleaning options to correct string formatting issues.

Please follow these steps for Exercise 2:



* **Step 1 –** Add a Clean Step after the Orders Input step.

    >[!hint][How to add a clean step](instructions258460/2024-04-02_16-31-59.gif)

* **Step 2 –** On the Orders Clean Step, remove the question marks (?) and exclamation points (!) from values in the Sub-Category field by using the Remove Punctuation option.

    >[!hint][How to add a clean step](instructions258460/2024-04-02_16-34-29.gif)

* **Step 3 –** Add a Clean Step after the Shipping Input Step.

    >[!hint][How to add a clean step](instructions258460/2024-04-02_16-38-47.gif)


* **Step 4–** On the Shipping Clean Step, group the Shipping Status field by Spelling to correct the rows where Ordered and Shipped are misspelled.

    >[!hint][How to add a clean step](instructions258460/2024-04-02_16-40-28.gif)


* [ ] My data is polished and ready to be transformed!

>[!note]**🔥 HOT Tip 🔥 –** be kind to your future self; Prep lets you leave notes and descriptions on each of the steps in the flow, *and* on each change within a single step so you can look back later.


## **Optional Challenge**

Try out a few other cleaning functions:


* Use the ‘Split Values’ cleaning function on the ‘Product ID’ field to test out splitting on a delimiter.
* Use the ‘Make Uppercase’ option to make all three values in the ‘Segment’ field uppercase (found by going to More Options […] and then choosing ‘Clean’).
* Expand the Changes Pane and click on the Pencil icon next to each of these cleaning functions to examine the calculation Prep automatically writes for you.
* Remember that you can also undo these functions by expanding the Changes Pane and clicking on the ‘x’ next to each of these functions.



# ✏️ Exercise 3 - Transform Data: Pivot & Join

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

* Add a Pivot Step after the Shipping Clean Step.

    >[!hint][How to add a pivot step](instructions258460/2024-04-02_17-31-39.gif)


* Pivot the two values in the Shipping Status field (Ordered and Shipped) from **rows** to **columns** and select the Date field as the one to aggregate in the corresponding new columns.
* Change the aggregation being performed on the Date field so that it shows an actual date instead of a count of the dates.

### Exercise 3b – Identifying Duplicate Rows prior to Joining

* Create a Clean step after your Pivot Step
* Click the 'Identify Duplicate Rows' Option to generate a calculated field
* Modify your calculated field to exclude 'City'
* Filter your data to exclude 'Duplicate' rows based on your 'Is Duplicate Row?' column
* Remove the 'Is Duplicate Row?' Column to clean up your dataset

### Exercise 3c – Joining Orders with Shipping Data

* Inner Join the Orders to the Shipping data by clicking on the Orders Clean Step, dragging and hovering it over the Shipping Pivot step, and dropping it onto the ‘Join’ box when it appears. Your join will be done on the Order ID field.
* [ ] **All my data is together now, hurray!**

>[!note]**🔥 HOT Tip 🔥 –** Push Cross-Database joins or unions **later** in your flows. This often helps reduce the number of rows / columns needing to be joined, and when using a database will leverage the databases query ability where possible.





# Exercise 4 – Conduct Analysis: Calculated Fields and Analytic Functions

### 💡 Key Points

* Tableau Prep supports many of the same calculation types as Tableau Desktop, including Aggregation, Date, Logical, Number, String, and Type Conversion expressions.
* Level of Detail (LOD) expressions allow you to calculate data at multiple levels of granularity in the same table without needing to create a separate Aggregation Step.
* Rank, Running Calculation, and Moving Calculations allow you to perform a function across a specific slice of rows (like a window function in SQL).
* You can write rank, Running calculation, and Moving calculations from scratch in a calculated field, or you can use the Visual Editor to help build out your logic.
* Use multiple Clean Steps to organize your logic and make it easier to keep it updated. Loading all of your calculations into one step increases the likelihood of dependencies and things breaking when you change them over time.

### 📙 Resource Quick Links

## 🎯 Your Task

## 📝 Instructions

* **Step 1 –** Add a Clean Step after your Join Step. Name this step 'Table Calculation'.
* **Step 2 –** Use the Visual Editor to create a Running Sum of each Sales Segment over Order Date 

    >[+hint] Use the following table calculation selections
    >
    >    * Group by the 'Segment',
    >    * Order by the 'Order Date' ascending,
    >    * Compute using 'Sales,
    >    * Running calculation aggregator should be 'SUM'


* **Step 3 –** Add a Clean Step after your Join Step. Name this step 'Window Calculation'.
* **Step 4 –** Use the Visual Editor to create a 3 month Window Average of NPS called ++++3 Month Average NPS++++ over Order Month

    >[+hint] Use the following window calculation selections
    >
    >    * Order by the 'Order Month' ascending,
    >    * Compute using 'NPS',
    >    * Running calculation aggregator should be 'AVG' for the 'previous 2, current' values


* **Step 5 –** Create a calculated field called 'Top Influencer' to determine if a customer's NPS is greater than the '3 Month Average NPS'. The calculation should return 'Top Influencer' if they meet this condition, else should return NULL.

    >[+hint] Calculation Logic
    >
    >    ++++IF [NPS] > [3 Month Average NPS] THEN 'Top Influencer' ELSE NULL END++++


* [ ] **I'm done making calculations and feel like a pro**



## Exercise 5 - Create Parameters and Output

### 💡 Key Points

* A parameter is a global placeholder value such as a number, text value, or boolean value that can replace a constant value in a flow.
* You can use parameters to filter data or dynamically change strings, like filenames.
* Tableau Prep Builder versions 2021.4.1 and later support the use of parameters in flows.
* Tableau Cloud and Tableau Server versions 2021.4.0 and later can run flows containing parameters.

### 📙 Resource Quick Links

* [Tableau Documentation - Create and Use Parameters in Flows](https://help.tableau.com/current/prep/en-us/prep_parameters.htm)

Superstore serves the United States and Canada, and the data you’re working with contains information for both countries. You know that your stakeholders will likely ask you to divide the data into two copies, one for each country. Rather than creating duplicate data sets and doubling up your workload, you decide to add a parameter to filter the data. That way, when analysts from the Operations Team run the flow themselves, they can choose to filter its output for the country team they work with.

After we create the parameter, we’ll need to backtrack in our flow and add a step to filter our data. From there, we’ll tie everything up nicely by adding an Output Step. We’ll complete the following steps:


## 📝 Instructions

### Step 1 - Create a Parameter

* Create a parameter named ‘Choose a Country’ that allows users to pick between the United States or Canada. The data type will be string, and the allowable values should be stored in a list. The values will be 'United States' and 'Canada'. **Bonus –** add an 'All' value to the parameter as well.

### Step 2 – Apply Parameters to your Flow

* Click on input step of our "shipping.csv" data source.
* Click the Filter Values option at the top of the Profile Pane and add a filter logic that sets the Country/Region field equal to the Choose a Country field. **Bonus –** Create a logic calculation to take the 'All' value and output both countries.

>[+hint] (Bonus) Calculation Logic
>
>    ++++IF [Country/Region] = [Parameters.Choose a Country] OR [Parameters.Choose a Country] = 'All' THEN TRUE ELSE FALSE END++++

>[!knowledge]**🔥 HOT Tip 🔥 –** In general, filters in the input step **perform better** when authoring since against a database, they will filter out our initial query. Filtering in step nodes have to pull in a larger sample prior to filtering.


### Step 3 – Check your work

Check to see if your parameter filter worked by clicking on the ‘5. Top NPS’ Clean Step and looking at the Country/Region field. Change the value you’ve selected in your parameter by clicking on it in the toolbar. You should see the Country/Region field adjust depending on whether you selected the United States or Canada.


### Step 4 - Create the Output

* Add a new Output step at the end of your flow, Save your output to a "Published Data Source" in the default location
* Name your output as `TopNPS_Orders_<Choose a Country>`



* [ ] **My data flow is complete; now to sit back and relax.**

* * *

