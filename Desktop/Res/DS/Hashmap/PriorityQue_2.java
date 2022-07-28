import java.util.*;
public class PriorityQue_2 {


    // static class Student implements Comparable<Student>{
    //     String name;
    //     int rank;
    //     int height;
    //     int age;

    //     Student(String st, int rk ,int age, int ht){
    //         this.name = st;
    //         this.rank = rk;
    //         this.age = age;
    //         this.height = ht;
    //     }

    //     public String toString(){  // Sysout automatically calls toString
    //         String str = "Name: "+this.name+", Age: "+this.age+", Height:"+this.height;
    //         return str;
    //     }

    //     public int compareTo(Student o){
    //         return this.age - o.age;
    //     }


    // }

    // public static void main(String args[]){
    //     // Student s = new Student("Manik",22,165);
    //     // System.out.println(s);

    //     Student stdnts[] = new Student[4];
    //     stdnts[0] = new Student("Himesh",3,34,180);
    //     stdnts[1] = new Student("Suresh",1,4,190);
    //     stdnts[2] = new Student("Balram",4,18,170);
    //     stdnts[3] = new Student("Balramrd",2,8,150);

    //     PriorityQueue<Student> pq = new PriorityQueue<>();
    //     for(Student std : stdnts){
    //         pq.add(std);
    //     }

    //     while(pq.size() !=0 ){
    //         System.out.println(pq.remove());
    //     }
    // }

    //--------------------------------------------
    // Suppose simultaneously we want to compare base on age, rank, height: in that case we need to implement 
    // the comparator class

    static class Student implements Comparable<Student>{
        String name;
        int rank;
        int height;
        int age;

        Student(String st, int rk ,int age, int ht){
            this.name = st;
            this.rank = rk;
            this.age = age;
            this.height = ht;
        }

        public String toString(){  // Sysout automatically calls toString
            String str = "Name: "+this.name+"\tRank: "+this.rank+"\tAge: "+this.age+"\tHeight:"+this.height;
            return str;
        }

        public int compareTo(Student o){
            return this.age - o.age;
        }
    }

    static class studentRankComparator implements Comparator<Student>{
        public int compare(Student s1, Student s2){
            return s1.rank-s2.rank;
        }
    }

    static class studentHeightComparator implements Comparator<Student>{
        public int compare(Student s1, Student s2){
            return s1.height-s2.height;
        }
    }




    public static void main(String args[]){
        // Student s = new Student("Manik",22,165);
        // System.out.println(s);

        Student stdnts[] = new Student[4];
        stdnts[0] = new Student("Himesh",3,34,180);
        stdnts[1] = new Student("Suresh",1,4,190);
        stdnts[2] = new Student("Balram",4,18,170);
        stdnts[3] = new Student("Rahul",2,8,150);

        PriorityQueue<Student> pqAge = new PriorityQueue<>();  // It uses the default comparable interface (that we use normally)
        PriorityQueue<Student> pqRank = new PriorityQueue<>( new studentRankComparator());  // It uses the Comparator interface, because comparable interface is limited to only basis of one propety
        PriorityQueue<Student> pqHeight = new PriorityQueue<>( new studentHeightComparator());  // It uses the comparable interface


        for(Student std : stdnts){// Adding the students in all types of pq
            pqAge.add(std);
            pqRank.add(std);
            pqHeight.add(std);
        }

        System.out.println("Priority on basis of Age:-");
        while(pqAge.size() !=0 ){
            System.out.println(pqAge.remove());
        }

        System.out.println("\nPriority on basis of Rank:-");
        while(pqRank.size() !=0 ){
            System.out.println(pqRank.remove());
        }

        System.out.println("\nPriority on basis of Height:-");
        while(pqHeight.size() !=0 ){
            System.out.println(pqHeight.remove());
        }
    }
}

// Sir if we are using the Comparator interface then can we skip the Comparable interface?
// Are they independent or Dependent on each other?




//*Insights we can also use CompareTo instead of Comparable
//Both are independent