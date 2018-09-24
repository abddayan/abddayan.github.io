<?php 
//
require 'C:/wamp64/dbConfig.php';
//
$sendEmail= $_POST['dbMsgFrom'];
$sendTel= $_POST['dbMsgFromTel'];
$subjOne= $_POST['dbMsgSubj'];
$subjTwo= $_POST['dbMsgMoreSubj'];
$mMsg= #_POST['dbMainMessage'];
$msgId= (string)time();
//validate message
//....
//

//ESTABLISHING CONNECTION TO DATABASE
$db_handle = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, dbname);

//$retResponse= array();
			if (mysqli_connect_errno()) {
			    #printf("Connect failed: %s\n", mysqli_connect_error());
			    $retResponse['servConnection1']="Failure";//This means that no 'ServConnection2',no 'dataRegistered', no 'receivedMsg'. In effect no further process is taken.
			    $retResponse = json_encode($retResponse);
				echo($retResponse);
			    #exit();
			}elseif ($db_handle) {
				#print "Connection to the Server established!".'<br>';
				$retResponse['servConnection1']="Success";

				$SQLquery = "INSERT INTO ".dbMessage." (MainMessage,MesgId,SenderEmailAddress,SenderTelephone,SubjectOne,SubjectTwo) VALUES ('$mMsg','$msgId','$sendEmail','$sendTel','$subjOne','$subjTwo')";
				//
				$result = mysqli_query($db_handle, $SQLquery);
					if ($result) {
								$retResponse['dataRegistered']="Success";
				$retSQLquery = "SELECT *FROM ".dbMessage." WHERE (SenderEmailAddress='dyndayan7@gmail.comf')||(MsgTstamp='2018-09-13 10:48:01.840574')";
				//
				$retResult = mysqli_query($db_handle, $retSQLquery);
							if ($retResult) {
								$retResponse['servConnection2']="Success";
								
							while ($thResult=mysqli_fetch_assoc($retResult)) {
								
								$retResponse['receivedMsg']=$thResult;
								echo(json_encode($retResponse));
								}
							/* free result set */
				    		mysqli_free_result($retResult);
							} else {
								$retResponse['servConnection2']="Failure";
								$retResponse['receivedMsg']="Not Sure";
								echo (json_encode($retResponse));
								
							}

					}else{
								$retResponse['dataRegistered']="Failure";
								$retResponse['receivedMsg']="Failure";
							}


							/* close connection */
							mysqli_close($db_handle);


				}


 ?>