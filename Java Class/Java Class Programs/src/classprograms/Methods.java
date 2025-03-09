package classprograms;

public class Methods {
	public static int getCountDigit(int num) {
		int count = 0;
		while(num != 0) {
			count++;
			num /= 10;
		}
		return count;
	}
	public static void main(String[] args) {
	   int digits = getCountDigit(1234);
	   System.out.println("Count of digit " + digits);
	}
}
