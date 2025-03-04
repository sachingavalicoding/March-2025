public class LinearSearch {

    public static int linear(int [] nums , int target){
         for(int i = 0; i < nums.length; i++){
            if(nums[i] == target){
                return i;
            }
         }
        return -1;
    }
    public static int binary(int [] nums , int target){
        int left = 0;
        int right = nums.length-1;
        while(left < right){
            int mid = (left + right ) / 2;
            if(nums[mid] == target){
                return  mid;
            }
            else if(nums[mid] < target){
                left = mid + 1;
            }
            else{
                right = mid -1;
            }
        }
        return -1;
    }
    public static void main(String [] args){
      int arr [] = {20,43,23,46,2, 56,76};
      int ans = linear(arr, 43);
      int ans1 = binary(arr, 56 );
      System.out.println(ans);
      System.out.println(ans1);
    }
}
