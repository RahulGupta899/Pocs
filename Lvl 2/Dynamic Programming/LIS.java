import java.util.*;
public class LIS{
    
    //Main
    public static void main(String args[]){
        run_LIS_opti();
    }


    // Display 1D DP
    private static void display1D(int[] dp){
        for(int val: dp) System.out.print(val+" ");
        System.out.println();
    }

    // Display 2D Dp
    private static void display2D(int dp[][]){
        for(int[] dp1D: dp) display1D(dp1D);
    }

    //------------------------------------------------------
    //Problem 1: Longest Increasing Subsequence
    //-------------------------------------------------------

    public static void LongestIncSubs(){
        int arr[] = {0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15,14};
        int mxLen = 0;
        // // LIS_RecCall
        // for(int i=0; i<arr.length; i++){
        //     mxLen = Math.max(mxLen, LIS_Rec(arr,i));
        // }


        // LIS_MemoizedCall
        // int dp[] = new int[arr.length];
        // for(int i=0; i<arr.length; i++){
        //     mxLen = Math.max(mxLen, LIS_Tabu(arr,i,dp));
        // }

        int dp[] = new int[arr.length];
        mxLen=LIS_Tabu(arr, dp);
        System.out.println(mxLen);
        display1D(dp);
    }

    public static int LIS_Rec(int arr[], int idx){
        int mxLen = 0; 
        for(int i=idx-1; i>=0; i--){
            if(arr[i]<arr[idx]){
                int prevAns = LIS_Rec(arr,i);
                mxLen = Math.max(mxLen, prevAns);
            }
        }
        return mxLen+1;        // +1 for the current element
    }

    public static int LIS_Memo(int arr[], int idx,int dp[]){
        if(dp[idx]!=0) return dp[idx];

        int mxLen = 0; 
        for(int i=idx-1; i>=0; i--){
            if(arr[i]<arr[idx]){
                int prevAns = LIS_Rec(arr,i);
                mxLen = Math.max(mxLen, prevAns);
            }
        }
        return dp[idx] = mxLen+1;        // +1 for the current element
    }

    public static int LIS_Tabu(int arr[], int dp[]){  // Use for problems
        int mxLis = 0;
        for(int idx=0; idx<arr.length; idx++){
            int mxPrev = 0;
            for(int pi=idx-1;  pi>=0 ; pi--){
                if(arr[pi]<arr[idx]){ 
                    mxPrev = Math.max(mxPrev, dp[pi]);
                }
            }
            dp[idx] = mxPrev+1;
            mxLis = Math.max(mxLis,dp[idx]);
        }
        return mxLis;
    }

    //------------------------------------------------------
    //Problem 2: Longest Decreasing Subsequence
    //------------------------------------------------------
    
    public static void longestDecSubs(){
        int arr[] = {0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15,14};
        int dp[] = new int[arr.length];
        int ans = LDS_2(arr,dp);
        display1D(dp);
        System.out.println(ans);
    }

    public static int LDS_1(int arr[], int dp[]){    // From idx 0 to mere pe khatam hone wala LDS
        int lds = 0;
        for(int idx=0; idx<arr.length; idx++){
            int mxPrev = 0;
            for(int pi=idx-1; pi>=0; pi--){
                if(arr[pi]>arr[idx]){
                    mxPrev = (dp[pi]>mxPrev)? dp[pi] : mxPrev;
                }
            }
            dp[idx] = mxPrev+1;
            lds=Math.max(lds,dp[idx]);
        }        
        return lds;
    }

    public static int LDS_2(int arr[], int dp[]){   // Reverse LDS : use often
        int n=arr.length;                           // From idx:n-1 to mere se start hone wala  LDS
        int lds = 0;
        for(int idx=n-1; idx>=0; idx--){
            int mxPrev = 0;
            for(int pi=idx+1; pi<n; pi++){
                if(arr[pi]<arr[idx]){
                    mxPrev = (dp[pi]>mxPrev)? dp[pi] : mxPrev;
                }
            }
            dp[idx] = mxPrev+1;
            lds = (dp[idx]>lds)?dp[idx]:lds;
        }
        return lds;
    }

    //------------------------------------------------------
    //Problem 3: Longest Bitonic Subsequence        #gfg
    //------------------------------------------------------
    public int LongestBitonicSequence(int[] arr)
    {
        int LISdp[] = new int[arr.length];
        int LDSdp[] = new int[arr.length];
        
        LIS_Tabu(arr,LISdp);
        LDS_2(arr,LDSdp);
        
        int lbs = 0;
        for(int i=0; i<arr.length; i++){
            lbs = Math.max(lbs, LISdp[i]+LDSdp[i]-1);
        }
        return lbs;
    }

    //------------------------------------------------------
    //Problem 4: Maximum Sum Bitonic Subsequence    #gfg
    //------------------------------------------------------

    public static int maxSumBS(int arr[], int n)
    {
        int LIS[] = new int[n];
        int LDS[] = new int[n];
        LIS_Sum(arr,LIS);
        LDS_Sum(arr,LDS);
        
        int mxBitSum = 0;
        for(int i=0; i<LIS.length; i++){
            mxBitSum = Math.max(mxBitSum, LIS[i]+LDS[i]-arr[i]);
        }
        return mxBitSum;
    }
    
    public static int LDS_Sum(int arr[], int dp[]){
        int ldsSum = 0;
        for(int idx=arr.length-1; idx>=0; idx--){
            int mxPrevSum = 0;
            for(int pi=idx+1; pi<arr.length; pi++ ){
                if(arr[pi]<arr[idx]){
                    mxPrevSum = Math.max(mxPrevSum, dp[pi]);
                }
            }
            dp[idx] = mxPrevSum+arr[idx];
            ldsSum = Math.max(dp[idx],ldsSum);
        }
        return ldsSum;
    }

    //------------------------------------------------------
    //Problem 5: Maximum Sum Increasing Subsequence    #gfg
    //------------------------------------------------------
    public static int LIS_Sum(int arr[], int dp[]){
        int lisSum = 0;
        for(int idx=0; idx<arr.length; idx++){
            int mxPrevSum = 0;
            for(int pi=idx-1; pi>=0; pi-- ){
                if(arr[pi]<arr[idx]){
                    mxPrevSum = Math.max(mxPrevSum, dp[pi]);
                }
            }
            dp[idx] = mxPrevSum+arr[idx];
            lisSum = Math.max(dp[idx],lisSum);
        }
        return lisSum;
    }

    //------------------------------------------------------
    //Problem 6: Reverse Longest Bitonic Subsequence    #gfg
    //------------------------------------------------------
    public static void RLBS(){
        int arr[] = {1,11,2,10,4,5,2,1};
        int LDS[] = new int[arr.length];  
        int LIS[] = new int[arr.length];  // Reverse wala

        LDS_1(arr,LDS);   // Start to end
        LIS_Rev(arr,LIS); // Reverse wala

        int lbs = 0; 
        for(int i=0; i<LDS.length; i++){
            lbs = Math.max(lbs, LDS[i]+LIS[i]-1);
        }
        display1D(LDS);
        display1D(LIS);
        System.out.println(lbs);
    }

    public static int LIS_Rev(int arr[], int dp[]){
        int n=arr.length;                           // From idx:n-1 to mere se start hone wala  LDS
        int lds = 0;
        for(int idx=n-1; idx>=0; idx--){
            int mxPrev = 0;
            for(int pi=idx+1; pi<n; pi++){
                if(arr[pi]>arr[idx]){
                    mxPrev = (dp[pi]>mxPrev)? dp[pi] : mxPrev;
                }
            }
            dp[idx] = mxPrev+1;
            lds = (dp[idx]>lds)?dp[idx]:lds;
        }
        return lds;
    }

    //------------------------------------------------------
    //Problem 7: Russian Doll Envelope    #LC354
    //------------------------------------------------------

    public int maxEnvelopes(int[][] envelopes) {
        Arrays.sort(envelopes, (a,b)->{
            return a[0]-b[0];
        });   // This will sort the arr in terms of height
        
        int n = envelopes.length;
        int dp[] = new int[n];
        
        int mxEv = 0;
        for(int idx=0; idx<n; idx++){
            int mxPrev = 0;
            for(int pi=idx-1; pi>=0; pi--){
                if(envelopes[pi][1]<envelopes[idx][1] && envelopes[pi][0]<envelopes[idx][0]){
                    // width check                              height check
                    mxPrev = Math.max(mxPrev,dp[pi]);
                }
            }
            dp[idx] = mxPrev+1;
            mxEv = Math.max(mxEv,dp[idx]);
        }
        return mxEv;
    }
    

    //------------------------------------------------------
    //Problem 8: Longest Increasing Subsequence count #LC673
    //-------------------------------------------------------

    public int findNumberOfLIS(int[] arr) {
        
        int n = arr.length;
        int dp[] = new int[n];
        int count[] = new int[n];
        
        int lis = 0;
        int countLis = 0;
        
        for(int idx=0; idx<arr.length; idx++){
            dp[idx] = 1;
            count[idx] = 1;
            for(int pi=idx-1; pi>=0; pi--){
                if(arr[pi]<arr[idx]){        
                    if(dp[pi]+1 == dp[idx]){
                        count[idx] += count[pi];
                    }
                    else if(dp[pi]+1 > dp[idx]){
                        dp[idx] = dp[pi]+1;
                        count[idx] = count[pi];
                    }
                    //else if(dp[pi]+1<dp[idx]) Do Nothing: think why?
                } 
            }
            if(dp[idx]>lis){
                    lis = dp[idx];
                    countLis = count[idx];
            }
            else if(dp[idx] == lis){
                    countLis = countLis + count[idx] ;
            }
            //else if(dp[idx]<lis) Do Nothing: think why?

            // *Insight: if sequence have same values then ignore those values, 
            //          just focus on values smaller then current (arr[pi]<arr[ci])
            
        }
        return countLis;
    }

    //-------------------------------------------------------------
    //Problem 9: Minimum deletion required to make array sorted
    //--------------------------------------------------------------
    
    public int minDeletions(int arr[], int n) 
	{ 
	   int dp[] = new int[n];
	   int LIS = getLIS(arr,dp);
	   return n-LIS;
	} 
	
	private int getLIS(int arr[],int dp[]){
	    int n=arr.length;
	    
	    int lis = 0;
	    for(int idx=0; idx<n; idx++){
	        int mxPrev = 0;
	        for(int pi=idx-1; pi>=0; pi--){
	            if(arr[pi]<arr[idx]){
	                   mxPrev = Math.max(mxPrev,dp[pi]);
	            }
	        }
	        dp[idx] = mxPrev + 1;
	        lis = Math.max(lis,dp[idx]);
	    }
	    return lis;
	}


    //-------------------------------------------------------
    //Problem 10: Building Bridges                      #gfg
    //-------------------------------------------------------

    public static void buildingBridges(){
        int cityPairs[][] = {{8,1},{1,2},{4,3},{3,4},{5,5},{2,6},{6,7},{7,8}};
        int ans = maxBridges(cityPairs);
        System.out.println(ans);
    }

    public static int maxBridges(int cityPairs[][])
    {   
        // arr = [[8,1],[1,2],[4,3],[3,4],[5,5],[2,6],[6,7],[7,8]]

        // step1: sort on basis of x : arr[i][0];
        Arrays.sort(cityPairs, (a,b)->{
            return a[0]-b[0];
        }); 

        // arr = [[1,2],[2,6],[3,4],[4,3],[5,5],[6,7],[7,8],[8,1]]
        // step2: Apply LIS on arr[i][1] just like russian Doll Problem;
        int n = cityPairs.length;
        int dp[] = new int[n];

        int mxLis = 0;
        for(int idx=0; idx<n; idx++){
            int mxPrev = 0;
            for(int pi=idx-1; pi>=0; pi--){
                if(cityPairs[pi][1]<cityPairs[idx][1] && cityPairs[pi][0]<cityPairs[idx][0]){
                    mxPrev = Math.max(mxPrev, dp[pi]);
                }
            }
            dp[idx] = mxPrev + 1;
            mxLis = Math.max(mxLis,dp[idx]);
        }

        return mxLis;
        // Answer : Time complexity: n2 as lis takes (n2)

        //Test cases: [[8,1],[1,2],[4,3],[3,4],[5,5],[2,6],[6,7],[7,8]]
        //            [[6,2],[4,3],[2,6],[1,5]]
    }
  
    //-------------------------------------------------------
    //Problem 11: LIS - OPTIMIZED  using Binary search 
    //-------------------------------------------------------
    
    public static void run_LIS_opti(){
        int arr[] = {10,9,2,5,3,7,101,18};
        int ans = LIS_Opti(arr);
        System.out.println(ans);
    }

    public static int LIS_Opti(int arr[]){
        List<Integer> list = new ArrayList<>();

        for(int idx=0; idx<arr.length; idx++){
            int ai = binarySearch(list,arr[idx]);   // Appropriate index
            if(ai == list.size()){ // ADD at end
                list.add(arr[idx]);
            }
            else{
                list.set(ai,arr[idx]);
            }
        }
        return list.size();
        // TC: O(nlogn)
        // SC: O(n)
    }

    private static int binarySearch(List<Integer> list, int val){
        int low = 0;
        int high = list.size();
 
        while(low!=high){
            int mid = (low+high)/2;
            if(list.get(mid) == val){      // same value k liye, jo prev val hai wahi dal denge
                return mid;
            }
            else if(val < list.get(mid)) high = mid;
            else if(val > list.get(mid)) low = mid + 1;
        }
        return high;
        // TC: log(n)
    }



    

    


}