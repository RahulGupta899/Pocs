import java.util.*;
public class hashmap{

    public static void main(String args[]){
        // basicIntro();

        int arr[] = {12,5,1,2,10,2,13,11,8,9,11,8,9,5,6,11};
        LCS(arr);
    }

    public static void basicIntro(){
        HashMap<String, Integer> hm = new HashMap<>();
        hm.put("India",130);
        hm.put("China",140);
        hm.put("Pak",70);
        hm.put("Bhutan",50);
        hm.put("Japan",15);
        System.out.println(hm); //{Bhutan=50, China=140, Japan=15, Pak=70, India=130}

        // To Update 
        hm.put("Bhutan",20);    
        System.out.println(hm); //{Bhutan=20, China=140, Japan=15, Pak=70, India=130}

        //To Remove
        hm.remove("China");
        System.out.println(hm);

        // To Iterate through a HashMap
        Set<String> keys  = hm.keySet();
        for(String key: keys){
            int val = hm.get(key);
            System.out.println(key+" = "+val);
        }
        boolean check = hm.containsKey("India");
        System.out.println(check);

        System.out.println(hm.get("delhi"));
    }

    // Longest consecutive subsequence
    public static void LCS(int arr[]){
        HashMap<Integer,Boolean> hm = new HashMap<>();

        // Step 1: Iterate in arr and fill the HashMap - True for all keys
        for(int key : arr){
            hm.put(key,true);   // Automatically Duplicated get handled
        }  // TC: o(n)

        // step 2: Iterate to the HashMap and Mark false for unvalid keys
        Set<Integer> keys = hm.keySet();
        for(int key: keys){
            if(hm.containsKey(key-1)){
                hm.put(key,false);
            }
        }// Tc: o(k)

        // step 3: Iterate through HashMap for keys that are true, and what could be its length
        int ss = Integer.MIN_VALUE;
        int ssl = Integer.MIN_VALUE;

        for(int key: keys){
            if(hm.get(key) == true){
                int count = 1;
                int sk = key+1;
                while(hm.containsKey(sk)){
                    count++;
                    sk = sk+1;
                }
                if(count>ssl){
                    ss = key;
                    ssl = count;
                }
            }
        }// TC: K

        //Step 4: Print the sequence
        for(int i=1,val=ss;i<=ssl;i++,val++){
            System.out.println(val);
        }

        // TC: o(n+K+K)
        // SC: O(n)

        

    }

}