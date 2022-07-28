import java.util.*;
import java.io.*;

public class customTree{
    
    static class Node{
      int data;
      ArrayList<Node> childrens = new ArrayList<Node>();
      Node(int data){
        this.data = data;
      }
    }

    static Node constructGraph(int arr[]){
      Stack<Node> st = new Stack<>();
      Node root = null;
      for(int i=0;i<arr.length;i++){
        if(arr[i] != -1){
          Node nnode = new Node(arr[i]);
          st.push(nnode);
          if(i==0){
            root = nnode;
          }
        }
        else if(st.size()>1){
          Node child = st.pop();
          st.peek().childrens.add(child);
        }
      }
      return root;
    }

    static void levelorderTraversal(Node root){
      Queue<Node> que = new ArrayDeque<>();
      que.add(root);
      while(que.size()>0){     // Remove , print, Add (RPA - Algorith)
        Node temp = que.remove();
        System.out.print(temp.data+" ");
        for(Node child : temp.childrens){
          que.add(child);
        }
      }
    }

    static void lineWiseLOT(Node root){
      Queue<Node> mq = new ArrayDeque<>();
      Queue<Node> cq = new ArrayDeque<>();
      mq.add(root);
      while(mq.size()>0){
        Node temp = mq.remove();
        System.out.print(temp.data+" ");
        for(Node child:temp.childrens){
          cq.add(child);
        }

        if(mq.size() == 0){
          mq = cq;
          cq = new ArrayDeque<>();
          System.out.println();
        }
      }
    }

    static void lineWiseZigzag(Node root){
      Stack<Node> ms = new Stack<>();
      Stack<Node> cs = new Stack<>();
      boolean flag = true;
      ms.push(root);
      while(ms.size()>0){
        Node temp = ms.pop();
        System.out.print(temp.data+" ");
        if(flag){
          for(Node child:temp.childrens){
            cs.push(child);
          }
        }else{
          for(int i=temp.childrens.size()-1;i>=0; i-- ){
            Node child = temp.childrens.get(i);
            cs.push(child);
          }
        }
        
        if(ms.size() == 0){
          ms = cs;
          cs = new Stack<>();
          flag = !flag;  // toggle flag
          System.out.println();
        }
      }
    }

    // Serialize : Return Graph in ArrayList
    static void serialize(Node node,ArrayList<Integer> list){
      list.add(node.data);
      for(Node child:node.childrens){
        serialize(child,list);
      }
      list.add(-1);
    }

    static int height(Node node){
      int ht = -1;
      for(Node child: node.childrens){
        int cht = height(child);
        ht = Math.max(cht,ht);
      }
      return ht+1;
    }

    static void mirror(Node node){
      for(Node child:node.childrens){
        mirror(child);
      }

      int i=0;
      int j=node.childrens.size() - 1;
      while(i<j){
        Node front = node.childrens.get(i);
        Node rear = node.childrens.get(j);
        node.childrens.set(i,rear);
        node.childrens.set(j,front);
        i++;
        j--;
      }
    }

    static void removeLeafs(Node node){
      for(int i=node.childrens.size()-1;i>=0;i--){
        Node child = node.childrens.get(i);
        if(child.childrens.size()>0){
          removeLeafs(child);
        }
        else{
          node.childrens.remove(i);
        }
      }
    }

    static void linearize(Node node){

      for(Node child: node.childrens){
        linearize(child);
      }

      for(int i=node.childrens.size()-1;i>0;i--){
        Node ddpc = deepestDecendedPrev(node.childrens.get(i-1)); 
        Node removedChild = node.childrens.remove(i);
        ddpc.childrens.add(removedChild);
      }
    }

    static Node deepestDecendedPrev(Node node){
      while(node.childrens.size()==1){
        node = node.childrens.get(0);
      }
      return node;
    }

    public static Node linearizeEfficient(Node node){
      // write your code here
      if(node.childrens.size() == 0){
        return node;
      }
      Node LCT = linearizeEfficient(node.childrens.get(node.childrens.size()-1));            // 100 
      while(node.childrens.size()>1){
        Node lchild = node.childrens.remove(node.childrens.size()-1);
        Node slchild = node.childrens.get(node.childrens.size()-1);
        Node SLCT = linearizeEfficient(slchild);
        SLCT.childrens.add(lchild);
      }
      return LCT;
    }

    static boolean AreTreesSimilar(Node node1, Node node2){
      if(node1.childrens.size()!=node2.childrens.size()) return false;

      for(int i=0;i<node1.childrens.size();i++){
        Node child1 = node1.childrens.get(i);
        Node child2 = node2.childrens.get(i);
        boolean similar = AreTreesSimilar(child1, child2);
        if(similar == false){
          return false;
        }
      }
      return true;
    }  

    static boolean AreTreesMirrorInShape(Node node1, Node node2){
      if(node1.childrens.size() != node2.childrens.size()) return false;
      for(int i=0,j=node2.childrens.size()-1;  i<node1.childrens.size() && j>=0  ; i++,j--){
        Node child1 = node1.childrens.get(i);
        Node child2 = node2.childrens.get(j);
        boolean isMirror = AreTreesMirrorInShape(child1,child2);
        if(isMirror == false){
          return false;
        }
      }
      return true;
    }

    static boolean isSymmetric(Node node){
      boolean flag = AreTreesMirrorInShape(node, node);
      return flag;
    }

    static int max = Integer.MIN_VALUE;
    static int min = Integer.MAX_VALUE;
    static int height = -1;

    static void Multisolver(Node node, int depth){
      if(node == null) return;
      max = (node.data>max)? node.data: max;
      min = (node.data<min)? node.data: min;
      height = (depth>height)?depth:height;
      for(Node child:node.childrens){
        Multisolver(child, depth+1);
      }
    }


    // *MULTISOLVER - COMMON VARIABLES CLASS
    public static class CommonVariables{
      int max = Integer.MIN_VALUE;
      int min = Integer.MAX_VALUE;
      int height = -1;
    }
    static void MultisolverClassCombo(Node node, int depth, CommonVariables obj){
      obj.max = Math.max(node.data,obj.max);
      obj.min = Math.min(node.data,obj.min);
      obj.height = Math.max(depth,obj.height);
      for(Node child: node.childrens){
        MultisolverClassCombo(child, depth+1, obj);
      }
    }


    static int lar = Integer.MIN_VALUE;
    static int slar = Integer.MIN_VALUE;
    public static void secondLargest(Node node){
      if(node.data>lar){
        slar = lar;
        lar = node.data;
      }
      else if(node.data>slar){
        slar = node.data;
      }
      for(Node child:node.childrens){
        secondLargest(child);
      }
    }
    
    
    static int ceil = Integer.MAX_VALUE;
    static int floor = Integer.MIN_VALUE;
    static void ceilAndFloor(Node node, int data){
      if(node.data>data){
        ceil = Math.min(node.data,ceil);    // Baro mai sabse chota
      }
      else if(node.data<data){
        floor = Math.max(node.data,floor);  // choto mai sabse bara
      }
      for(Node child:node.childrens){
        ceilAndFloor(child, data);
      }
    }
    

    static class CommonVariables2{
      int ceil = Integer.MAX_VALUE;
      int floor = Integer.MIN_VALUE;
    }
    static void ceilAndFloorClassCombo(Node node, int data, CommonVariables2 obj){
      if(node.data>data){
        obj.ceil = Math.min(node.data,obj.ceil);
      }
      else if(node.data<data){
        obj.floor = Math.max(node.data,obj.floor);
      }
      for(Node child:node.childrens){
        ceilAndFloorClassCombo(child, data,obj);
      }
    }
    

    static Stack<Node> st = new Stack<>();
    static Stack<Node> sthlpr = new Stack<>();
    static void kthLargest(Node node){
    
      if(st.size()==0 || st.peek().data <= node.data){
        st.push(node);
      }
      else if( st.peek().data > node.data){
        while(st.size()>0 && st.peek().data >node.data){
          Node temp = st.pop();
          sthlpr.push(temp);
        }
        st.push(node);
        while(sthlpr.size()>0){
          Node temp = sthlpr.pop();
          st.push(temp);
        }
      }
      for(Node child: node.childrens){
        kthLargest(child);
      }

     
      
    }


    static class Pair{
      int state = -1;
      Node node;
      Pair(Node node){
        this.node = node;
      }
    }

    public static void iterativePrePost(Node node){
      Stack<Pair> st = new Stack<>();
      Pair p = new Pair(node);
      st.push(p);

      String pre = "";
      String post = "";
      while(st.size()>0){
        Pair top = st.peek();
        if(top.state == -1){
          pre+=top.node.data+" ";
          top.state++;
        }
        else if(top.state >=0 && top.state <top.node.childrens.size()){
          Node child = top.node.childrens.get(top.state);
          Pair cp = new Pair(child);
          st.push(cp);
          top.state++;
        }
        else if(top.state == top.node.childrens.size()){
          post+=top.node.data+" ";
          st.pop();
        }
      }
      System.out.println(pre);
      System.out.println(post);
    }
    
    static ArrayList<Integer> list = new ArrayList<>(); 
    public static void predSuc(Node node,int data){
      preOrderTraversal(node);
      list.get()
    }

    static void preOrderTraversal(Node node){
      list.add(node.data);
      for(Node child: node.childrens){
        preOrderTraversal(child);
      }
    }
    
    static int maxNodeSum = 0;
    static int nd;
    static int nodeSum(Node node){
      int sum = 0;
      for(Node child: node.childrens){
        int cs = nodeSum(child);
        sum+=cs;
      }
      sum+=node.data;
      if (sum>maxNodeSum){
        maxNodeSum = sum;
        nd = node.data;
      } 
      return sum;
    }
    
    
    
    
    
    
    //  MAIN:  
       public static void main(String args[])throws Exception{
      // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      // int n = Integer.parseInt(br.readLine());
      // String vals[] = br.readLine().split(" ");
      // int arr[] = new int[n];
      // for(int i=0;i<arr.length;i++){
      //   arr[i] = Integer.parseInt(vals[i]);
      // }

      int arr1[] = {10,20,60,-1,-1,30,70,-1,80,110,-1,120,-1,-1,90,-1,-1,40,100,-1,-1,-1};  
      int arr[] = {10,20,50,-1,60,-1,-1,3,70,-1,120,110,-1,12,-1,-1,90,-1,-1,40,100,-1,-1,-1};
      int arr0[] ={10,7,-1,9,4,-1,-1,-1};
      int arr2[] = {10,20,50,-1,60,70,-1,80,-1,-1,-1,30,100,-1,90,-1,210,50,-1,60,-1,-1,-1,40,-1,-1};
      int arr3[] = {10,40,-1,30,210,50,-1,60,-1,-1,90,-1,100,-1,-1,20,60,80,-1,70,-1,-1,50,-1,-1,-1};
      int arr4[] = {10,20,-1,30,-1,-1};
      Node root1 = constructGraph(arr); 
      Node root2 = constructGraph(arr3);
      // System.out.println(AreTreesSimilar(root1,root2));
      // System.out.println(isSymmetric(root1));
      // System.out.println(AreTreesMirrorInShape(root1,root2));
      // linearizeEfficient(root);
      // lineWiseLOT(root);

      // Multisolver(root1, 1);
      // System.out.println("Max = "+max);
      // System.out.println("Min = "+min);
      // System.out.println("Height = "+height);

      // CommonVariables obj = new CommonVariables();
      // MultisolverClassCombo(root1,0,obj);
      // System.out.println("Max = "+obj.max);
      // System.out.println("Min = "+obj.min);
      // System.out.println("Height = "+obj.height);

      // secondLargest(root1);
      // System.out.println("Largest = "+lar);
      // System.out.println("second Largest = "+slar);

      // ceilAndFloor(root1,120);
      // System.out.println("floor = "+floor);
      // System.out.println("ceil = "+ceil);

      // CommonVariables2 obj = new CommonVariables2();
      // ceilAndFloorClassCombo(root1,70,obj);
      // System.out.println("floor = "+obj.floor);
      // System.out.println("ceil = "+obj.ceil);

      // kthLargest(root1);
      // while(st.size() != 3){
      //   st.pop();
      // }
      // System.out.println(st.peek().data);

      // iterativePrePost(root1);
      nodeSum(root1);
      System.out.println("Max Node "+maxNodeSum+" @ "+nd);
    }
}

//Insights:
// 1. Variables can be declared in heap using Static, say static max = Integer MIN_VALUE;
// 2. Ceil : data se barewalo mai sabse chota
// 3. Floor: data se chote walo mai sabse bara


// Must go through
// 1. Linearize and linearizeEfficient
//* 2. Predecesor and successor  - Multisolver Algorithm

