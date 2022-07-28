
import java.util.*;

public class Priority {

  public static void priorityQueueIntro(){
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    pq.add(50);
    pq.add(42);
    pq.add(98);
    pq.add(16);
    pq.add(18);
    pq.add(2);
    pq.add(44);
    pq.add(9);
    System.out.println(pq.peek()); 
    System.out.println(pq);  // [2,...other elements]
    pq.remove();
    System.out.println(pq); // [9,..other elements]

    PriorityQueue<Integer> pqHigh = new PriorityQueue<>(Collections.reverseOrder());
    pqHigh.add(50);
    pqHigh.add(42);
    pqHigh.add(98);
    pqHigh.add(16);
    pqHigh.add(18);
    pqHigh.add(2);
    pqHigh.add(44);
    pqHigh.add(9);
    System.out.println(pqHigh.peek()); 
    System.out.println(pqHigh);  // [98,...other elements]
    pqHigh.remove();
    System.out.println(pqHigh);  // [50,...other elements]

  }

  public static void solve(int[] arr,int k){
    
      PriorityQueue<Integer> pq = new PriorityQueue<>();
      
        for(int i=0;i<arr.length;i++){
          if(i<k){
            pq.add(arr[i]);
          }
          else{
            if(arr[i]>pq.peek()){
              pq.remove();
              pq.add(arr[i]);
            }
          } 
        } 
    
      ArrayList<Integer> kelmts = new ArrayList<>();
      while(pq.size()>0){
        kelmts.add(pq.remove());
      }
      for(int i=kelmts.size()-1 ;i>=0; i--){
        System.out.print(kelmts.get(i)+" ");
      }

    }
  
  // Merge k sorted list in one list

  static class Pair implements Comparable<Pair>{
    int data; // As we want to Proritize the PQ base on data, so we need to use comparable Interface 
    int li;  // list index
    int di;  // data index

    Pair(int data, int li, int di){
      this.data = data;
      this.li = li;
      this.di = di;
    }

    public int compareTo(Pair o){
      return this.data - o.data;    // assume o.data -> others elements of Priority Queue
    }
  }

  public static ArrayList<Integer> mergeKsorted(ArrayList<ArrayList<Integer>> lists){

    ArrayList<Integer> slist = new ArrayList<>();

    PriorityQueue<Pair> pq = new PriorityQueue<>();
    for(int li=0;li<lists.size(); li++){  // Adding first element of each list in PQ
      int data = lists.get(li).get(0);
      Pair p = new Pair(data,li,0);
      pq.add(p);    // logk
    }

              //* Let's say the entire elemts in lists = k*n = N
    while(pq.size()!=0){
      Pair top = pq.remove();
      int data = top.data;
      int li = top.li;
      int di = top.di;

      slist.add(data); // Add in Main list
      di++;            // if next data in particular list exists then, add list in Pq
      if(di<lists.get(li).size()){
        int newData = lists.get(li).get(di);
        Pair np = new Pair(newData,li,di);
        pq.add(np);
      }
    } // TC: N*logk 
      // Sc: k + N = O(N)

    return slist;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    ArrayList<ArrayList<Integer>> lists = new ArrayList<>();

    int k = sc.nextInt();
    for(int i=0;i<k;i++){
      int n=sc.nextInt();
      ArrayList<Integer> list = new ArrayList<>();
      for(int j=0;j<n;j++){
        list.add(sc.nextInt());
      }
      lists.add(list);
    }
    
    ArrayList<Integer> slist = mergeKsorted(lists);
    System.out.println(slist);
  }
}