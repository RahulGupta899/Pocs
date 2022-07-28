import java.util.*;

public class BST{

    static class Node{
        int data;
        Node left;
        Node right;

        Node(int data){
            this.data = data;
        }
    }

    static Node constructFromSarr(int arr[], int lo, int hi){
        if(lo>hi) return null;

        int mid = (lo+hi)/2;
        Node node = new Node(arr[mid]);
        node.left = constructFromSarr(arr,lo,mid-1);
        node.right = constructFromSarr(arr,mid+1,hi);
    
        return node;
    }

    static void printBST(Node node){
        if(node == null) return;
        String str = node.data+"";
        str = (node.left != null)? node.left.data+" --> "+str : ". --> "+str;
        str = (node.right != null)? str +" --> "+node.right.data : str +" --> .";
        System.out.println(str);

        printBST(node.left);
        printBST(node.right);
    }
    
    static boolean find(Node node, int data){
        if(node == null) return false;
        if(node.data == data){
            return true;
        }
        else if(data > node.data){
            return find(node.right,data);
        }
        else{
            return find(node.left,data);
        }
    }
    // static int sum = 0;
    // static void replaceWithSumOfLarger(Node node){
    //     if(node == null) return;

    //     replaceWithSumOfLarger(node.right);
    //     int temp = node.data;
    //     node.data = sum;
    //     sum+=temp;
    //     replaceWithSumOfLarger(node.left);
    // }
    
    static void replaceWithSumOfLarger(Node node){
        RWSOLGlobal g = new RWSOLGlobal();
        RWSOLHelper(node,g);
    }
    static class RWSOLGlobal{
        int sum = 0;
    }
    
    static void RWSOLHelper(Node node, RWSOLGlobal g){
        if(node == null) return;

        RWSOLHelper(node.right,g);
        int temp = node.data;
        node.data = g.sum;
        g.sum = g.sum+temp;
        RWSOLHelper(node.left,g);
    }


    static int lowestCommonAncestor(Node node, int d1, int d2){
        
        if(d1>node.data && d2>node.data)
            return lowestCommonAncestor(node.right, d1, d2);
        
        else if(d1<node.data && d2<node.data)
            return lowestCommonAncestor(node.left, d1, d2);
                
        else
            return node.data;
    }
    
    static void printInRange(Node node, int d1, int d2){
        if(node == null) return;

        if(d1>node.data && d2>node.data){
            printInRange(node.right,d1,d2);
        }
        else if(d1<node.data && d2<node.data){
            printInRange(node.left,d1,d2);
        }
        else{
            printInRange(node.left,d1,d2);
            System.out.println(node.data);
            printInRange(node.right,d1,d2);
        }
    }

    public static Node addInBST(Node node, int data){
        if(node == null){
            Node nnode = new Node(data);
            return nnode;
        }
        if(data<node.data){
            node.left = addInBST(node.left, data);
        }
        else if(data>node.data){
            node.right = addInBST(node.right, data);
        }
        return node;
    }

    static void targetSumPair(Node node, Node root,  int data){
        if(node == null) return;

        targetSumPair(node.left,root,data);
        int rem = data - node.data;
        boolean isPrsnt = find(root,rem);
        if(isPrsnt && node.data<rem){
            System.out.println(node.data+" - "+rem);
        }
        targetSumPair(node.right,root,data);
    } // TC: o(n*h) , Sc: o(n+h)


    static class TSPPair{
        Node node;
        int state;
        TSPPair(Node node){
            this.node = node;
        }
    }
    static void tspOptimized(Node node, int tar){
        Stack<TSPPair> lstack = new Stack<>();
        TSPPair lsp = new TSPPair(node);
        lstack.push(lsp);

        Stack<TSPPair> rstack = new Stack<>();
        TSPPair rsp = new TSPPair(node);
        rstack.push(rsp);

        int leftVal = getInorder(lstack);     // o(h)
        int rightVal = getRevInorder(rstack); // o(h)

        while(leftVal<rightVal){
            if(leftVal + rightVal < tar){
                leftVal = getInorder(lstack);  // 0(h)
            }
            else if(leftVal + rightVal > tar){
                rightVal = getRevInorder(rstack);
            }
            else{
                System.out.println(leftVal+" - "+rightVal);
                leftVal = getInorder(lstack);
                rightVal = getRevInorder(rstack);
            }
        }
    }

    // Inorder traversal - Ascending order (LNR)
    public static int getInorder(Stack<TSPPair> stack){
        while(stack.size() != 0 ){
            TSPPair top = stack.peek();
            if(top.state == 0){     // Push Left
                if(top.node.left !=null){
                    TSPPair np = new TSPPair(top.node.left);
                    stack.push(np);
                }
                top.state++;
            }
            else if(top.state == 1){ // Push Right, Pre order se return hoga
                if(top.node.right !=null){
                    TSPPair np = new TSPPair(top.node.right);
                    stack.push(np);
                }
                top.state++;
                return top.node.data;
            }
            else{
                stack.pop();
            }
        }
        return Integer.MIN_VALUE;
    }

    // Reverse Inorder Traversal : Decending order (RNL)
    public static int getRevInorder(Stack<TSPPair> stack){
        while(stack.size() !=0){
            TSPPair top = stack.peek();
            if(top.state == 0){  // Push right
                if(top.node.right !=null){
                    TSPPair np = new TSPPair(top.node.right);
                    stack.push(np);
                }
                top.state++;
            }
            else if(top.state == 1){  // Push Left
                if(top.node.left != null){
                    TSPPair np = new TSPPair(top.node.left);
                    stack.push(np);
                }
                top.state++;
                return top.node.data;
            }
            else{
                stack.pop();
            }
        }
        return Integer.MIN_VALUE;
    }

    public static void main(String args[]){
        int arr[] = {10,20,30,40,50,60,70,80,90,100};
        Node root = constructFromSarr(arr,0,arr.length-1);
        // printBST(root);
        // replaceWithSumOfLarger(root);
        // printBST(root);
        // int lca = lowestCommonAncestor(root, 90,70);
        // System.out.println(lca);
        // printInRange(root,25, 99);
        // targetSumPair(root, root, 120);

        tspOptimized(root, 100); 
        
    }


}