---
title: Tableau Prep for Pros – Getting Started
description: Next Level Data Preparation
---
Thanks for attending 'Prepare to take your Prep to the next level!', our advanced Tableau Prep training session.


* We will be exploring how you can take your data preparation up a level using Tableau Prep Builder. This is designed as an advanced level session, so you should have some familiarity with Prep Builder and its basic features.
* The goal is for us to build one flow together through a series of 5 exercises, but don't fret if you get out of sync! On your VM desktop there is a folder called 'Exercise Answers' that contains versions of the flow updated with the completed steps for each exercise. You can use these to get caught up if needed, but please try to follow along.
* If you have any questions during the session, raise your hand, and a volunteer will come and assist you
* After you’re done, please fill out our feedback survey! One of the best parts of the Tableau Community is how we can all learn from each other and improve.

:::tip[Download the Exercise Files]
Download the files for today's exercise [here](../../src/assets/files/1806-hot-prep-advanced.zip).
:::

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

    1. What is each customer's average [Net Promoter Score (NPS)](/../../reference/nps)?
    2. Which customers are our 'top influencers' and have exceptional Net Promoter Scores each month?

* We will clean and restructure our data in exercises 1 through 3. We will directly answer these questions in exercise 4. In exercise 5, we will explore how you can use parameters to dynamically filter to answer these questions for a subset of your data.