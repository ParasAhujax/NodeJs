#include iostream
using namespace std;
int main{
        int i=0;
        for(int j=nums.length-1;i>=0;i--){
            int sum = accumulate(nums.begin(),nums.end(),0);
            
            if(sum%k==0){
                return nums;
            }
            else{
                i++;
            }
 
        }
    return 0;
}