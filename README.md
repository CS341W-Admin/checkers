# ES6 Modules — An exercise with randomized verses from Romans
## Assignment Overview
This assignment demonstrates the use of ES6 module export/import for better code management. On accepting this assignment from GitHub Classroom, you will follow the steps below to clone this repo to your local machine's Git repository. 

You will use the guidance in this week's lesson PDF to do the following:
1. Update the index.html page to include a script link that loads the index.js file. 
   _NOTE: Use the `defer` tag on the script linking to ensure that the HTML body loads first._ 
2. Test your code to make sure you can see the randomized verse. 
3. Relocate the versesRomans variable declaration from index.js to a separate file. Make sure the module file __exports__ versesRomans. 
4. Update index.js so that it __imports__ the versesRomans array from your module file.
5. Update the index.html file to ensure support for ES6 modules.
6. Test your code to make sure you can see the randomized verse.

Once you have finished all steps, you will push a working branch of your code from your local machine back to this remote repository ("repo") on GitHub. To signal code readiness, you will open a pull request here on GitHub, which will result in an automatic notification to the instructor. 

The instructor will do the following: 
- Review your code and make any comments on your pull request
- Merge the accepted code into the "main" branch of the remote repo on GitHub
- Close the pull request 

## First Time Repo Configuration

1. Make sure you have Git installed on your local machine. You can check by typing this command in the terminal window:
    ```
    git status
    ```
2. If the git command is not recognized, then download and install Git for your respective operating system (Mac, Windows, etc.):
    [link to Git download page](https://git-scm.com/downloads)

3. Create a project dev folder called "ESModules.

    *NOTE: This is where the code project will be housed. If you're on a Mac, then you should create this folder within the 🔨 Developer folder. If you're on Windows, you might want to create your dev folder somewhere within your Documents directory. You can create this folder by using the File Explorer (Windows) or the Finder (Mac). Alternatively, you can create it from the terminal window (like a boss) as follows.*  
    - Run `pwd` to reveal the current folder path. *Move to the right directory/folder within the terminal shell, as needed.* 
    - Run `mkdir ESModules`. *The folder is created.*
    - Run `cd ESModules`. *You are now in the new folder.* 

4. Clone the GitHub assignment repo into your new project dev folder:
    ```
    git clone --single-branch --branch main [assignment repo url] .
    ```
    *NOTE: Be certain to replace this — `[assignment repo URL]` — with your actual GitHub repo URL for this assignment, and **do not forget the trailing space and period**, which tells Git to use the current folder. For example:* 
    > `git clone --single-branch --branch main https://github.com/CS341W/es6-modules-John-Doe .`

5. Create a new branch called "dev-esm" and perform a check-out with the following one-line command:
    ```
    git checkout -b dev-esm
    ```
**Conclusion:** You are now ready to work in the "dev-esm" branch of your local repository. When you have finished making code changes, then proceed to *Submitting Your Code via GitHub* below.

## Submitting Your Code via GitHub

1. Confirm that you're on the "dev-esm" branch. If you're not sure, then use the following commands to a) see what branch you're on, and b) switch to "dev-esm": 
    ```
    git branch
    git checkout dev-esm
    ```
2. Make sure any new files have been added to the local repo. Use `git add` to add files/folders selectively, or use the global command:
   ```
   git add .
   ```
3. Commit any recent changes within your local repo — before pushing your code:
   ```
   git commit -a -m "[your custom message]"
   ```
    *NOTE: Remember to replace this `[your custom message]` with your own message, such as, "Adding new code for module."*

4. Push your code to the "dev-esm" branch on the remote GitHub repository.

    *NOTE: If this is a first-time push, this action results in creation of the branch at the remote repo (GitHub) level; otherwise, this updates the existing "dev-esm" branch on the remote repo.*
    ```
    git push origin dev-esm
    ```
5. Log in at [https://github.com](https://github.com) and access this repo. 

    *NOTE: Your repo should appear in the left column when you log in. For more direct access, just follow the URL for this repo.* 
    
6. Perform the following steps to target your pull request: 
    - Click the "Pull requests" top menu link. *The Pull Requests panel appears.* 
    - Click the "New pull request" button. *The Compare Changes panel appears.*
    - Click the "compare" drop down-menu button. *A list of active branches appears.*
    - Click the "dev-esm" branch name. *GitHub automatically evaluates the selected branch against the main branch for any conflicts. If there are no conflicts, then a green "able to merge" message is displayed.*
    - Click the "Create pull request" button. *The "Open a pull request" input panel appears.*
7. Perform the following steps to finalize and submit your pull request:
    - Type a brief 1-line description for the request, such as, "Submitting code for async functions and modules."
    - Use the "Write" textbox to leave any comments or questions about this exercise. Include the tag @CS341W-Admin to generate an alert to the instructor.
    - Click the "Submit" button.

**Conclusion:** You have completed the steps necessary to submit your code.
