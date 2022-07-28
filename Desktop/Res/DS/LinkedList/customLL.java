package LinkedList;

import java.util.*;

public class customLL{
    static class Node{
        int data;
        Node next;

        Node(int val, Node next){
            this.data = val;
            this.next = null;
        }
    }

    static class LinkedList{
        Node head;
        Node tail;
        int size;

        void addLast(int val){
            Node nnode = new Node(val,null);

            if(head == null){
                head = tail = nnode;
            }else{
                Node temp = head;
                while(temp.next!=null){
                    temp=temp.next;
                }
                temp.next = nnode; 
            }
            size++;
        }

        void addFirst(int val){
            Node nnode = new Node(val,null);
            if(head == null){
                head=tail=nnode;
            }
            else{
                nnode.next = head;
                head = nnode;
            }
            size++;
        }
        
        void addAt(int idx, int val){   
            if(idx<0 || idx > size){
                System.out.println("oops!! Null Pointer Exception - Invalid arguments ");
                return;
            }

            if(idx == 0 ){
                addFirst(val);
            }
            else if(idx == size){
                addLast(val);
            }
            else{
                Node nnode = new Node(val,null);

                Node temp = head;
                for(int i=0;i<idx-1;i++){
                    temp = temp.next;
                }
                nnode.next = temp.next;
                temp.next = nnode;
                size++;
            }
        }
        
        void removeLast(){
            if(size == 0){
                System.out.println("List is Empty - can't remove");
                return;
            }

            if(size == 1){
                head=tail=null;
                System.out.println("All elements are removed - List has become empty...");
            }
            else{
                Node temp = head;
                while(temp.next.next !=null){
                    temp = temp.next;
                }
                temp.next = null;
                tail = temp;
            }
            size--;
        }
        
        void removeFirst(){
            if(size == 0){
                System.out.println("List is empty - can't removeFirst");
                return;
            }
            else if( size == 1){
                head = tail = null;
                System.out.println("List has become empty now");
            }
            else{
                head = head.next;
            }
            size--;

        }
        
        void removeAt(int idx){
            if(idx<0 || idx>=size){
                System.out.println("oops!! Null Pointer Exception - Invalid arguments ");
                return;
            }

            if(idx == 0){
                removeFirst();
            }
            else if(idx == size-1){
                removeLast();
            }
            else{
                Node temp = head;
                for(int i=0;i<idx-1;i++){
                    temp = temp.next;
                }
                temp.next = temp.next.next;
                size--;
            }
        }

        int getAt(int idx){
            if(idx<0  || idx>=size ){   // Handling Null pointer exception
                System.out.println("Null Pointer Exception - Invalid arguments");
                return -1;
            }

            Node temp = head;
            for(int i=0;i<idx;i++){
                temp = temp.next;
            }
            return temp.data;
        }

        void size(){
            System.out.println("size = "+size);
        }

        void display(){
            if(size == 0){
                System.out.println("Nothing to print - Empty list");
                return ;
            }
            Node temp = head;
            while(temp!=null){
                System.out.print(temp.data+" -- ");
                temp = temp.next;
            }
            System.out.println();
        }
    }

    public static void main(String args[]){
        LinkedList list = new LinkedList();
        list.addLast(20);
        list.addLast(120);
        list.addLast(98);
        list.size();
        list.display();

        list.addFirst(12);
        list.addFirst(2);
        list.display();
        list.size();

        // System.out.println(list.getAt(6));  // It will give Null Pointer exception - update the code 
                                            // It occurs because we are trying to access an object that has null reference
    
        list.addAt(13,111) ;
        list.display(); 

        list.removeAt(5);
        list.display();  
        list.size();                         
    } 



}