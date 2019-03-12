var xtalert_demo = {
	/*
		功能: 提示错误信息
		Param: 
		    -title: 提示框的名字
			-msg: 提示的内容
			type: "error", "warning", "success", "info"
	*/
	"alertError": function(title="错误", msg='', type="error"){
		swal(title=title, msg=msg, type=type)
	},

	"alertInfo": function(title="提示", msg='', type="warning"){
		swal(title=title, msg=msg, type=type)
	},

	"alertSuccess": function(title="成功", msg='', type='success'){
		swal(title=title, msg=msg, type=type)
	},

	/*
        功能：确认提示
        参数：字典的形式
            - title：提示框标题（可选）
            - type：提示框的类型（可选）
            - confirmText：确认按钮文本（可选）
            - cancelText：取消按钮文本（可选）
            - msg：提示框内容（必须）
            - confirmCallback：确认按钮点击回调（可选）
            - cancelCallback：取消按钮点击回调（可选）
    */
	'alertConfirm':function (params) {
        swal({
            'title': params['title'] ? params['title'] : '提示',
            'showCancelButton': true,
            'showConfirmButton': true,
            'type': params['type'] ? params['type'] : '',
            'confirmButtonText': params['confirmText'] ? params['confirmText'] : '确定',
            'cancelButtonText': params['cancelText'] ? params['cancelText'] : '取消',
            'text': params['msg'] ? params['msg'] : ''
        },function (isConfirm) {
            if(isConfirm){
                if(params['confirmCallback']){
                    params['confirmCallback']();
                }
            }else{
                if(params['cancelCallback']){
                    params['cancelCallback']();
                }
            }
        });
    },

}