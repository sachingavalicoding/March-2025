public class ReverseArray {
    
    public static void main(String[] args) {
        int arr [] = {23,33,54,43,54};
       int start = 0;
       int end = arr.length -1;
       while(start < end){
        int temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
       }

       for(int i : arr){
        System.out.print(i + " ");
       }
    }
}
