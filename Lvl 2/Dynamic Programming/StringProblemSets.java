import java.util.Arrays;

    /* Approaches to Try 
        1. String length:  what when sn==sm  , when sn!=sm 
    */
public class StringProblemSets{

    //-------------------------------------------------------------
    //Problem 1: Longest Palindromic Subsequence (LPSS)         #LC516     ***
    //-------------------------------------------------------------

    public int longestPalindromeSubseq(String s) {
        int sz = s.length();
        int dp[][] = new int[sz][sz];
        int ans =  longestPalindromicSubSeq_tabu(s,0,s.length()-1,dp);
        return ans;
    }
     
    public int longestPalindromicSubSeq_Rec(String s, int i, int j){// solving in terms of index
        if(i>=j){ // either size 0 or 1
            return i==j?1:0;
        }
        
        int call1 = longestPalindromicSubSeq_Rec(s,i+1,j-1);
        int call2 = longestPalindromicSubSeq_Rec(s,i+1,j);
        int call3 = longestPalindromicSubSeq_Rec(s,i,j-1);
        
        if(s.charAt(i) == s.charAt(j)) return call1+2;
        
        return Math.max(call2,call3);
    }
    
    public int longestPalindromicSubSeq_memo(String s, int i, int j, int dp[][]){
        if(i>=j){ // either size 0 or 1
            return dp[i][j] = (i==j?1:0);
        }
        
        if(dp[i][j] !=0 ) return dp[i][j];
        
        int call1 = longestPalindromicSubSeq_memo(s,i+1,j-1,dp);
        int call2 = longestPalindromicSubSeq_memo(s,i+1,j,dp);
        int call3 = longestPalindromicSubSeq_memo(s,i,j-1,dp);
        
        if(s.charAt(i) == s.charAt(j))
            return dp[i][j] = call1+2;
        
        return dp[i][j] = Math.max(call2,call3);
    }
    
    public int longestPalindromicSubSeq_tabu(String s, int I, int J, int dp[][]){
        int sz = s.length();
        for(int gap=0; gap<sz; gap++){
            for(int i=0, j=gap; j<sz; i++, j++){
                if(i>=j){ // either size 0 or 1
                    dp[i][j] = (i==j?1:0);
                    continue;
                }
                
                int call1 = dp[i+1][j-1];
                int call2 = dp[i+1][j];
                int call3 = dp[i][j-1];
                
                if(s.charAt(i) == s.charAt(j))
                 dp[i][j] = call1+2;
                
                else
                 dp[i][j] = Math.max(call2,call3);
                
            }
        }
        return dp[I][J];
    }// O(n/2)
 
    //-------------------------------------------------------------
    //Problem 2: Longest Common Subsequence (LCSS)             #LC1143  ***
    //-------------------------------------------------------------
    public int longestCommonSubsequence(String s1, String s2) {
        int n = s1.length();
        int m = s2.length();
        int dp[][] = new int[n+1][m+1];
        for(int arr[]: dp) Arrays.fill(arr,-1);  // Because default 0, can be the part of ans,
        int ans = LCS_Tabu(s1,s2,n,m,dp);       //  When, abc, efg   LCS = 0
        return ans;
    }                         
                                            // solving in terms of length of string
    public int LCS_memo(String s1, String s2, int n, int m, int dp[][]){
        if(n==0|| m==0){
            return dp[n][m] =  0;
        }
        
        if(dp[n][m] != -1) return dp[n][m];
        
        int call1 = LCS_memo(s1,s2,n-1,m-1,dp);
        int call2 = LCS_memo(s1,s2,n-1,m,dp);
        int call3 = LCS_memo(s1,s2,n,m-1,dp);
        
        if(s1.charAt(n-1) == s2.charAt(m-1))
            return dp[n][m] = call1+1;
        else
            return dp[n][m] = Math.max(call2,call3);
    }
    
    public int LCS_Tabu(String s1, String s2, int N, int M, int dp[][]){
        for(int n=0; n<=N; n++ ){
            for(int m=0; m<=M; m++){
                if(n==0|| m==0){
                    dp[n][m] =  0;
                    continue;
                }
                
                int call1 = dp[n-1][m-1];
                int call2 = dp[n-1][m];
                int call3 = dp[n][m-1];

                if(s1.charAt(n-1) == s2.charAt(m-1))
                     dp[n][m] = call1+1;
                else
                     dp[n][m] = Math.max(call2,call3);
             }
        }
        
        return dp[N][M];         
    }


    //-------------------------------------------------------------
    //Problem 3: Edit Distance                          #LC72
    //-------------------------------------------------------------

    public int minDistance(String s1, String s2) {
        int n = s1.length();
        int m = s2.length();
        int dp[][] = new int[n+1][m+1];
        int ans = minDistance_Tabu(s1,s2,n,m,dp);
        return ans;
    }
    
    public int minDistance_Rec(String s1, String s2, int n, int m){
        if(n==0 || m==0){  // for either insert or delete
            return n==0? m : n;
        }
        int call1 = minDistance_Rec(s1,s2,n-1,m-1);// Equal or Replace
        int call2 = minDistance_Rec(s1,s2,n,m-1); // Insert
        int call3 = minDistance_Rec(s1,s2,n-1,m); // Delete
        
        if(s1.charAt(n-1) == s2.charAt(m-1)) 
            return call1; // No operation Required
        else
            return Math.min(Math.min(call1,call2),call3) + 1; // One Operation
    }
    
    public int minDistance_Memo(String s1, String s2, int n, int m, int dp[][]){
        if(n==0 || m==0){  // for either insert or delete
            return dp[n][m] = (n==0? m : n);
        }
        
        if(dp[n][m] !=0 ) return dp[n][m]; 
        
        int call1 = minDistance_Memo(s1,s2,n-1,m-1,dp);// Equal or Replace
        int call2 = minDistance_Memo(s1,s2,n,m-1,dp); // Insert
        int call3 = minDistance_Memo(s1,s2,n-1,m,dp); // Delete
        
        if(s1.charAt(n-1) == s2.charAt(m-1)) 
            return dp[n][m] =  call1; // No operation Required
        else
            return dp[n][m] = Math.min(Math.min(call1,call2),call3) + 1; // One Operation
    }
    
    public int minDistance_Tabu(String s1, String s2, int N, int M, int dp[][]){
        
         for(int n=0; n<=N; n++){
            for(int m=0; m<=M; m++){
                if(n==0 || m==0){  // for either insert or delete
                    dp[n][m] = (n==0? m : n);
                    continue;
                }
                
                int call1 = dp[n-1][m-1];// Equal or Replace
                int call2 = dp[n][m-1]; // Insert
                int call3 = dp[n-1][m]; // Delete
                
                if(s1.charAt(n-1) == s2.charAt(m-1)) 
                     dp[n][m] =  call1; // No operation Required
                else
                     dp[n][m] = Math.min(Math.min(call1,call2),call3) + 1; // One Operation
            } 
         }
         
         return dp[N][M];   
         //Tc: O(str1 * str2), SC: O(str1*str2)    
    }
                                            

    //-------------------------------------------------------------
    //Problem 4: Edit Distance with cost             
    //-------------------------------------------------------------
                                            
    static int cost[] ={2,1,4}; 
    public int minDistanceWithCost_Tabu(String s1, String s2, int N, int M, int dp[][], int cost[]){
        
        for(int n=0; n<=N; n++){
           for(int m=0; m<=M; m++){
               if(n==0 || m==0){  // for either insert or delete
                   dp[n][m] = (n==0? m : n);
                   continue;                                            // cost of insertion, deletion , Replace given
               }                                                        // insertion, deletion, replace
               
               int call1 = dp[n-1][m-1] ;           // Equal
               int call2 = dp[n][m-1] + cost[0];    // Insert
               int call3 = dp[n-1][m] + cost[1];    // Delete
               int call4 = dp[n-1][m-1] + cost[2];  // Replace
               
               if(s1.charAt(n-1) == s2.charAt(m-1)) 
                    dp[n][m] =  call1; // No operation Required
               else
                    dp[n][m] = Math.min(Math.min(call1,call2),call3);
           } 
        }
        
        return dp[N][M];       
   }

    //-------------------------------------------------------------
    //Problem 5: Minimum number of deletions and insertions  #gfg             
    //-------------------------------------------------------------
    
    public int minOperations(String str1, String str2) 
	{ 
	    int n = str1.length();
	    int m = str2.length();
	    int dp[][] = new int[n+1][m+1]; // Because 0 might be the potential ans
	    for(int arr[]: dp) Arrays.fill(arr,-1);
	    int ans = minOperations_Memo(str1,str2,n,m,dp);
	    return ans;
	} 
	
	public static int minOperations_Memo(String s1, String s2, int n, int m, int dp[][]){
	    if(n==0 || m==0){  // for either insert or delete
            return dp[n][m] = (n==0? m : n);
        }
        
        if(dp[n][m] != -1 ) return dp[n][m]; 
        
        int call1 = minOperations_Memo(s1,s2,n-1,m-1,dp);// Equal 
        int call2 = minOperations_Memo(s1,s2,n,m-1,dp); // Insert
        int call3 = minOperations_Memo(s1,s2,n-1,m,dp); // Delete
        
        if(s1.charAt(n-1) == s2.charAt(m-1)) 
            return dp[n][m] =  call1; // No operation Required
        else
            return dp[n][m] = Math.min(call2,call3) + 1; // One Operation
	}


    //-------------------------------------------------------------
    //Problem 6: Distinct Subsequence         #LC115
    //-------------------------------------------------------------
   
    public int numDistinct(String s, String t) {
        int n = s.length();
        int m = t.length();
        int dp[][] = new int[n+1][m+1];
        for(int arr[]: dp) Arrays.fill(arr,-1);
        int ans = numDistinct_Tabu(s,t,n,m,dp);
        // display2D(dp);
        return ans;
    }
    
    public int numDistinct_Rec(String s, String t, int n, int m){
        if(n==0 || m==0){
            return m==0?1:0;
        }
        int call1 = numDistinct_Rec(s,t,n-1,m-1);
        int call2 = numDistinct_Rec(s,t,n-1,m);
        
        if(s.charAt(n-1) == t.charAt(m-1)){
            return call1+call2;
        }
        else return call2;
    }
    
    public int numDistinct_Memo(String s, String t, int n, int m, int dp[][]){
        if(n==0 || m==0){
            return dp[n][m] =  (m==0?1:0);
        }
        
        if(dp[n][m] != -1) return dp[n][m];
        
        int call1 = numDistinct_Memo(s,t,n-1,m-1,dp);
        int call2 = numDistinct_Memo(s,t,n-1,m,dp);
        
        if(s.charAt(n-1) == t.charAt(m-1))
            return dp[n][m] = call1+call2;
        
        else 
            return dp[n][m] = call2;
    }
    
    public int numDistinct_Tabu(String s, String t, int N, int M, int dp[][]){
        for(int n=0; n<=N; n++){
            for(int m=0; m<=M; m++){
                if(n==0 || m==0){
                    dp[n][m] =  (m==0?1:0);
                    continue;
                }
                
                int call1 = dp[n-1][m-1];
                int call2 = dp[n-1][m];
                
                if(s.charAt(n-1) == t.charAt(m-1))
                     dp[n][m] = call1+call2;

                else 
                     dp[n][m] = call2;
                
            }
        }
        return dp[N][M];
    }


    //-------------------------------------------------------------
    //Problem 7: Delete Operations for two strings          #LC583
    //-------------------------------------------------------------

    public int minDistance_LC583(String word1, String word2) { 
        // Application of  LONGEST COMMON SUBSEQUENCE
        
        int n=word1.length(), m = word2.length();
        int dp[][] = new int[n+1][m+1];
        for(int arr[]: dp) Arrays.fill(arr,-1);
        int len = LCS_memo(word1,word2,n,m,dp);
        
        return n+m - 2*len ;
    }

    //-------------------------------------------------------------
    //Problem 8: Uncrossed Lines        #LC1035
    //-------------------------------------------------------------
    public int maxUncrossedLines(int[] arr1, int[] arr2) {
         // Application of  LONGEST COMMON SUBSEQUENCE

        int n=arr1.length;
        int m=arr2.length;
        int dp[][] = new int[n+1][m+1];
        for(int arr[]: dp) Arrays.fill(arr,-1);
        
        int len = LCS_Array_memo(arr1,arr2,n,m,dp);
        return len;
    }
    
    public int LCS_Array_memo(int arr1[], int arr2[], int n, int m, int dp[][]){
        if(n==0 || m==0)
            return dp[n][m] = 0;
        
        if(dp[n][m] != -1 ) return dp[n][m];
        
        int call1 = LCS_Array_memo(arr1,arr2,n-1,m-1,dp);
        int call2 = LCS_Array_memo(arr1,arr2,n-1,m,dp);
        int call3 = LCS_Array_memo(arr1,arr2,n,m-1,dp);
        
        if(arr1[n-1] == arr2[m-1]) 
            return dp[n][m] = call1+1;
        else
            return dp[n][m] = Math.max(call2,call3);
    }
    
    //-------------------------------------------------------------
    //Problem 9: Longest Palindromic Substring (LPS)         #LC5         ***
    //-------------------------------------------------------------
    
    public String longestPalindrome(String s) { // Only Tabulized solution is possible
        int len = 0 ;
        int si = 0; // starting index
        int count = 0; // No. of palindromic substrings
        int sz = s.length();
        int dp[][] = new int[sz][sz];
        
        for(int gap=0; gap<sz; gap++){
            for(int i=0, j=gap; i<sz && j<sz; i++, j++){
                if(gap==0)
                    dp[i][j] = 1;
                else if( gap==1 && s.charAt(i)==s.charAt(j))
                    dp[i][j] = 2;
                else if(s.charAt(i)==s.charAt(j))
                    dp[i][j] = (dp[i+1][j-1]>0)? dp[i+1][j-1]+2 : 0;
                
                else
                    dp[i][j] = 0;
                
                if(dp[i][j]>len){
                    len = dp[i][j];
                    si = i;
                }
                
                count += dp[i][j]!=0? 1: 0;
            }
        }
        return s.substring(si,si+len);
    }

    //-------------------------------------------------------------
    //Problem 10: Longest Common Substring                    #gfg
    //-------------------------------------------------------------
    
    public int longestCommonSubstr(String S1, String S2, int N, int M){ 
        int len = 0; // length of longest common substring
        int ei = 0 ; // ending index
        int dp[][] = new int[N+1][M+1];
        for(int n=0; n<=N; n++){
            for(int m=0; m<=M; m++){
                if(n==0 || m==0) continue;
                
                if(S1.charAt(n-1) == S2.charAt(m-1)){
                    dp[n][m] = dp[n-1][m-1] + 1;
                    if(dp[n][m]>len){
                        len = dp[n][m];
                        ei = n;
                    }
                }
            }
        }
        System.out.println("Longest Common Substring "+ S1.substring(ei-len,ei));
        return len;
    }

    //-------------------------------------------------------------
    //Problem 11: Count subsequence of type a^i b^j c^k       #gfg
    //-------------------------------------------------------------

    public int fun(String s){
        int aCount=0, bCount = 0, cCount = 0;
        for(char ch: s.toCharArray()){
            if(ch=='a'){
                aCount = aCount     + 1 + aCount; 
                                // a is starting point  
                                 // Consider empty string k
                                 // aage a lagaya
            }
            else if(ch=='b'){
                bCount = bCount     + aCount + bCount;
                    // without including     with including
            }
            else{
                cCount = cCount     + bCount + cCount;
            }
        }
        return cCount;
    }

    public int fun_GFG(String s){ 
        // Cryptic for GFG Submission
        int mod = (int) 1e9+7;
        int aCount = 0, bCount = 0, cCount = 0;
        for(char ch : s.toCharArray()){
            if(ch == 'a'){
                aCount = ( (2 *aCount%mod) + 1 ) % mod;
                                 
            }
            else if(ch == 'b'){
                bCount = ((2*bCount % mod) + aCount % mod)  % mod;
                      
            }
            else // c
                cCount = (( 2 *cCount%mod) + bCount % mod)  % mod;
        }
        return cCount%mod;
    }


    //1458. Max Dot Product of Two Subsequences

}



                       

