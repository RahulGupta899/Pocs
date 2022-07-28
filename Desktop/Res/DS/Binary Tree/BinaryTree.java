import java.util.*;

public class BinaryTree{
    static class Node{
        int data;
        Node left;
        Node right;
        
        Node(int data){
            this.data = data;
        }
    }

    static Node construct(Integer arr[]){
        Stack<Pair> st = new Stack<>();

        Node root = new Node(arr[0]);
        root.left = null;
        root.right = null;

        Pair p = new Pair(root,1);
        st.push(p);

        int idx = 1;
        while(idx<arr.length){
            Pair top = st.peek(); 

            
            if(top.state == 1){
                if(arr[idx] != null){
                    Node nnode = new Node(arr[idx]);
                    top.node.left = nnode;
                    Pair np = new Pair(nnode,1);
                    st.push(np);
                }
                top.state++;
            }
            else{
                if(arr[idx] != null){
                    Node nnode = new Node(arr[idx]);
                    top.node.right = nnode;
                    st.pop();
                    Pair np = new Pair(nnode,1);
                    st.push(np);
                }
                else{
                    st.pop();
                }
            }
            idx++;
        }
        return root;
    }

    static void display(Node node){
        if(node == null) return;

        String str = ""+node.data;
        str = (node.left == null) ? ". --> "+str : node.left.data+" --> "+str;
        str = (node.right == null) ? str+" --> . " : str+" --> "+node.right.data;
        System.out.println(str);

        display(node.left);
        display(node.right);
    }

    

    public static void main(String args[]){
        Integer arr[] = {50,25,12,null,null,37,30,null,null,null,75,62,null,70,null,null,87,null,null};
        Node root = construct(arr);
        root = addInBST(root,24);
        display(root);
    }

}











// import java.util.*;

// public class Binarytree{

    // static class Node{
    //     int data;
    //     Node left;
    //     Node right;
        
    //     Node(int data){
    //         this.data = data;
    //     }
    // }

//     static class Pair{
//         Node node;
//         int state = 1;

//         Pair(Node node, int state){
//             this.node = node;
//             this.state = state;
//         }
//     }
    
    // static Node construct(Integer arr[]){
    //     Stack<Pair> st = new Stack<>();

    //     Node root = new Node(arr[0]);
    //     root.left = null;
    //     root.right = null;

    //     Pair p = new Pair(root,1);
    //     st.push(p);

    //     int idx = 1;
    //     while(idx<arr.length){
    //         Pair top = st.peek(); 

            
    //         if(top.state == 1){
    //             if(arr[idx] != null){
    //                 Node nnode = new Node(arr[idx]);
    //                 top.node.left = nnode;
    //                 Pair np = new Pair(nnode,1);
    //                 st.push(np);
    //             }
    //             top.state++;
    //         }
    //         else{
    //             if(arr[idx] != null){
    //                 Node nnode = new Node(arr[idx]);
    //                 top.node.right = nnode;
    //                 st.pop();
    //                 Pair np = new Pair(nnode,1);
    //                 st.push(np);
    //             }
    //             else{
    //                 st.pop();
    //             }
    //         }
    //         idx++;
    //     }
    //     return root;
    // }

    // static void display(Node node){
    //     if(node == null) return;

    //     String str = ""+node.data;
    //     str = (node.left == null) ? ". --> "+str : node.left.data+" --> "+str;
    //     str = (node.right == null) ? str+" --> . " : str+" --> "+node.right.data;
    //     System.out.println(str);

    //     display(node.left);
    //     display(node.right);
    // }
    
//     static int size(Node node){
//         if(node == null){
//             return 0;
//         }
//         int size = 0;
//         size+= size(node.left);
//         size+= size(node.right);
//         return size+1;
//     }

//     static int sum(Node node){
//         if(node == null){
//             return 0;
//         }
//         int sum = node.data;
//         sum+= sum(node.left);
//         sum+= sum(node.right);
//         return sum;
//     }

//     static int min(Node node){
//         if(node == null){
//             return Integer.MAX_VALUE;
//         }
//         int min = node.data;
//         int leftmin = min(node.left);
//         min = (leftmin<min)? leftmin : min;
//         int rightmin = min(node.right);
//         min = (rightmin<min)? rightmin : min;
        
//         return min;
//     }

//     static int height(Node node){
//         if(node == null) return -1;
//         int lch = height(node.left);
//         int rch = height(node.right);
//         int ht = (lch>rch)? lch+1 : rch+1;
//         return ht;
//     }

//     static void levelOrderTraversal(Node node){
//         Queue<Node> que = new ArrayDeque<>();
//         Queue<Node> cque = new ArrayDeque<>();
//         que.add(node);
//         while(que.size()>0){
            
//             Node top = que.remove();
//             System.out.print(top.data+" ");
//             if(top.left != null) cque.add(top.left);
//             if(top.right != null) cque.add(top.right);
            
//             if(que.size() == 0){
//                 que = cque;
//                 cque = new ArrayDeque<>();
//                 System.out.println();
//             }
//         }
//     }

//     static boolean findAndNTRPath(Node node, int data, ArrayList<Integer> list){
//         if(node == null) return false;
//         if(node.data == data){
//             list.add(node.data);
//             return true;
//         }

//         boolean lcStatus = findAndNTRPath(node.left,data,list);
//         if(lcStatus){
//             list.add(node.data);
//             return true;
//         } 
//         boolean rcStatus = findAndNTRPath(node.right,data,list);
//         if(rcStatus){
//             list.add(node.data);
//             return true;
//         } 

//         return false;

//     }

//     static void kLevelsDown(Node node, int k){
//         if(node == null){
//             return;
//         }
//         if(k == 0){
//             System.out.println(node.data);
//             return;
//         }

//         kLevelsDown(node.left, k-1);
//         kLevelsDown(node.right, k-1);
//     }

//     static ArrayList<Node> nodeToRootPath(Node node, int data){
//         ArrayList<Node> ret = new ArrayList<>();
//         if(node == null){
//             return ret;
//         }
//         if(node.data == data){
//             ret.add(node);
//             return ret;
//         }

//         ArrayList<Node> lpath = nodeToRootPath(node.left,data);
//         if(lpath.size()>0){
//             lpath.add(node);
//             return lpath;
//         }

//         ArrayList<Node> rpath = nodeToRootPath(node.right,data);
//         if(rpath.size()>0){
//             rpath.add(node);
//             return rpath;
//         }

//         return ret;
//     }

//     static void printKLevelsDown(Node node, int k, Node blockedChild){
//         if(node == null || node == blockedChild) return;
//         if(k==0){
//             System.out.println(node.data);
//             return;
//         }
//         printKLevelsDown(node.left,k-1,blockedChild);
//         printKLevelsDown(node.right,k-1,blockedChild);
//     }

//     static void printNodesKDistFar(Node node, int k, int data){
//         ArrayList<Node> list = nodeToRootPath(node,data);
//         for(int i=0;i<list.size();i++){
//             Node memberNode = list.get(i);
//             Node blockedChild = null;
//             if(i>0){
//                 blockedChild = list.get(i-1);
//             }
            
//             printKLevelsDown(memberNode, k,blockedChild);
//             k--;
//         }
//     }

//     static void itereativePreInPostTraversal(Node node){
//         Stack<Pair> st = new Stack<>();
//         String pre = "";
//         String in = "";
//         String post = "";

//         Pair np = new Pair(node, 1);
//         st.push(np);
//         while(st.size()>0){
//             Pair top = st.peek();
//             if(top.state == 1){
//                 pre+=top.node.data+" ";
//                 top.state++;
//                 if(top.node.left != null){
//                     Pair lcp = new Pair(top.node.left,1);
//                     st.push(lcp);
//                 }
//             }
//             else if(top.state == 2 ){
//                 in+=top.node.data+" ";
//                 top.state++;
//                 if(top.node.right != null){
//                     Pair rcp = new Pair(top.node.right,1);
//                     st.push(rcp);
//                 }
//             }
//             else{
//                 post+=top.node.data+" ";
//                 st.pop();
//             }
//         }

//         System.out.println(pre);
//         System.out.println(in);
//         System.out.println(post);
//     }
    
//     public static Node createLeftCloneTree(Node node){
//         if(node == null) return null;
//         Node left = createLeftCloneTree(node.left);
//         Node right = createLeftCloneTree(node.right);
    
//         Node clone = new Node(node.data);
//         clone.left = left;
//         node.left = clone;
//         return node;
//     }

//     static Node transformLeftcloneToNormal(Node node){
//         if(node == null) return null;
//         Node left = transformLeftcloneToNormal(node.left.left);
//         Node right = transformLeftcloneToNormal(node.right);

//         node.left = left;
//         node.right = right;
//         return node;
//     }                                                                                                                                                   

//     static void leftCloneToNormal(Node node){
//         if(node == null) return;
//         node.left = node.left.left;
//         leftCloneToNormal(node.left);
//         leftCloneToNormal(node.right);
//     }

//     static Node removeLeaves(Node node){
       
//         if(node == null || node.left == null && node.right==null) return null;
//         Node left = removeLeaves(node.left);
//         Node right = removeLeaves(node.right);
//         node.left = left;
//         node.right = right;
//         return node;
//       }

//     static void printSinglechildNode(Node node){
//         if(node == null) return;
//         if(node.left == null && node.right !=null){
//             System.out.println(node.data);
//         }
//         if(node.right == null && node.left !=null){
//             System.out.println(node.data);
//         }

//         printSinglechildNode(node.left);
//         printSinglechildNode(node.right);
//     }

//     // Method 1: 
//     static int dia = 0;
//     static int diameterOfTree(Node node){
//         if(node == null) return -1;
//         int lch = diameterOfTree(node.left);
//         int rch = diameterOfTree(node.right);
//         if(lch+rch+2 > dia){
//             dia = lch+rch+2;
//         }
//         return Math.max(lch,rch)+1;
//     }

//     //Method 2
//     static class DiaPair{
//         int dia = 0;
//     }
//     static int diameterOfTree2(Node node,DiaPair dp){
//         if(node == null) return -1;
//         int lch = diameterOfTree2(node.left,dp);
//         int rch = diameterOfTree2(node.right,dp);
//         if(lch+rch+2 > dp.dia){
//             dp.dia = lch+rch+2;
//         }
//         return Math.max(lch,rch)+1;
//     }
    

//     // Method 1: Travel and change
//     static int tilt = 0;
//     static int tiltOfTree1(Node node){
//         if(node == null) return 0;
//         int lsum = tiltOfTree1(node.left);
//         int rsum = tiltOfTree1(node.right);
//         tilt = tilt + Math.abs(lsum - rsum);
//         return lsum+rsum+node.data;
//     }

//     //Method 2
//     static class TiltPair{
//         int tilt = 0;
//     }
//     static int tiltOfTree2(Node node, TiltPair tp){
//         if(node == null) return 0;
//         int lsum = tiltOfTree2(node.left,tp);
//         int rsum = tiltOfTree2(node.right,tp);
//         tp.tilt = tp.tilt + Math.abs(lsum - rsum);
//         return lsum+rsum+node.data;
//     }

//     // Method 3
//     static class TiltPair2{
//         int tiltsum = 0;
//         int sum = 0;
//     }
//     static TiltPair2 tiltOfTree3(Node node){
//         TiltPair2 nodePair = new TiltPair2();
//         if(node == null){
//             return nodePair;
//         }
//         TiltPair2 lchild = tiltOfTree3(node.left);
//         TiltPair2 rchild = tiltOfTree3(node.right);

//         int tilt = Math.abs(lchild.sum - rchild.sum);

//         nodePair.tiltsum = lchild.tiltsum + rchild.tiltsum + tilt;
//         nodePair.sum = lchild.sum + rchild.sum + node.data;

//         return nodePair;
//     }


//     static class BSTPair{
//         boolean bst;
//         int maxVal;
//         int minVal;
//     }

//     // static BSTPair isBST(Node node){
//     //     BSTPair res = new BSTPair();
//     //     if(node.left ==null && node.right==null ){
//     //         res.bst = false;
//     //         return res;
//     //     }
//     //     if(node.left != null){
//     //         res.bst;
//     //     }
//     //     BSTPair lcp = isBST(node.left);
//     //     BSTPair rcp = isBST(node.right);

        
//     //     if(lcp.bst && rcp.bst && lcp.maxVal < node.data && node.data < rcp.minVal){
//     //         res.bst = true;
//     //         res.maxVal = Math.max(node.data, Math.max(lcp.maxVal,rcp.maxVal));
//     //         res.minVal = Math.min(node.data,Math.min(lcp.maxVal,rcp.maxVal));
//     //     }
//     //     else{
//     //         res.bst = false;
//     //     }
//     //     return res;
//     // }

    // public static Node addInBST(Node node, int data){
    //     if(node == null){
    //         Node nnode = new Node(data);
    //         return nnode;
    //     }
    //     if(data<node.data){
    //         node.left = addInBST(node.left, data);
    //     }
    //     else if(data>node.data){
    //         node.right = addInBST(node.right, data);
    //     }
    //     return node;
    // }


//     public static void main(String args[]){
//         Integer arr[] = {50,25,12,null,null,37,30,null,null,null,75,62,null,70,null,null,87,null,null};
//         // Integer arr[] = {10,20,40,null,null,null,30,null,50,null,null};
//         Node root = construct(arr);
//         // display(root);
//         // System.out.println("Size: " +size(root));
//         // System.out.println("Sum: " +sum(root));
//         // System.out.println("Min: " +min(root));
//         // System.out.println("Height: " +height(root));
//         // levelOrderTraversal(root);
//         // ArrayList<Integer> list = new ArrayList<>();
//         // System.out.println(findAndNTRPath(root, 70 , list));
//         // System.out.println(list);
//         // printNodesKDistFar(root,3,30);

//         // itereativePreInPostTraversal(root);
//         // System.out.println("-------------------------------------");
//         // leftClone(root);
//         // System.out.println("-------------------------------------");
//         // itereativePreInPostTraversal(root);
//         // System.out.println("-------------------------------------");
//         // leftCloneToNormal(root);
//         // itereativePreInPostTraversal(root);
//         // removeLeaf(root);
//         // levelOrderTraversal(root);
//         // printSinglechildNode(root);
//         // root = createLeftCloneTree(root);
//         // itereativePreInPostTraversal(root);
//         // root = transformLeftcloneToNormal(root);
//         // itereativePreInPostTraversal(root);
//         // TiltPair tp = new TiltPair();
//         // tiltOfTree2(root,tp);
//         // System.out.println(tp.tilt);

//         // TiltPair2 data = tiltOfTree3(root);
//         // System.out.println(data.tiltsum);

//         // DiaPair dp = new DiaPair();
//         // diameterOfTree2(root, dp);
//         // System.out.println(dp.dia);

//         root = addInBST(root, 24);
//         display(root);
        
//     }

// }

// Important : 
// 1. Left clone tree
// 2. Left clone tree to Normal
// 3. Remove leaves



